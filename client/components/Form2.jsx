import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Form2 = ({ package: packages }) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [payment, setPayment] = useState(false);
  const [online, setOnline] = useState(false);
  const [transactionid, setTransactionid] = useState("");
  const [bankTransactionid, setBankTransactionid] = useState("");
  const [bank, setBank] = useState("");
  const Router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (transactionid) {
      const data = {
        description,
        location,
        packages,
        transactionid,
        transaction: online,
      };
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/offline/createOfflineEvent`,
          data,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          Router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const data = {
        description,
        location,
        packages,
        transactionid: bankTransactionid,
        transaction: bank,
      };
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/offline/createOfflineEvent`,
          data,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          Router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {!payment ? (
        <form className="flex flex-col bg-yellow-200 w-8/12 mx-auto px-10 py-5">
          <div className="py-5 flex flex-col">
            <label htmlFor="location" className="pb-3">
              Location
            </label>
            <input
              className="w-6/12 py-2 px-2 outline-none"
              type="text"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="invitation" className="pb-3">
              Description
            </label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              className="outline-none px-2 py-2"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-black px-15 py-3 text-white rounded-lg"
            onClick={() => setPayment(true)}
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h1 className="font-bold ">Payment</h1>
          <div className="flex justify-center mt-4">
            <div className="bg-yellow-200 px-3 py-2 ml-8 rounded-lg">
              <h1
                onClick={() => {
                  setOnline(false);
                  setBank(!bank);
                }}
              >
                Bank Transfer
              </h1>
            </div>
            <div className="bg-yellow-200 px-3 py-2 ml-8 rounded-lg">
              <h1
                onClick={() => {
                  setOnline(!online);
                  setBank(false);
                }}
              >
                Online Transaction
              </h1>
            </div>
          </div>
          {online ? (
            <div className="mt-5">
              <label htmlFor="id" className="mr-4">
                Bkash Transaction Id
              </label>
              <input
                className="outline-none px-2 py-2 "
                type="text"
                name="id"
                onChange={(e) => setTransactionid(e.target.value)}
              />
              <br />
              <button
                className="mt-3 px-3 py-2 bg-yellow-200 rounded-lg"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </div>
          ) : (
            ""
          )}
          {bank ? (
            <div className="mt-5">
              <label htmlFor="id" className="mr-4">
                Bank Transaction Id
              </label>
              <input
                className="outline-none px-2 py-2 "
                type="text"
                name="id"
                onChange={(e) => setBankTransactionid(e.target.value)}
              />
              <br />
              <button
                className="mt-3 px-3 py-2 bg-yellow-200 rounded-lg"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Form2;
