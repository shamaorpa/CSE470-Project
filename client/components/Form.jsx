import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Form = ({ package: packages }) => {
  const Router = useRouter();
  const [reminder, setReminder] = useState(0);
  const [invitation, setInvitation] = useState("");
  const [payment, setPayment] = useState(false);
  const [online, setOnline] = useState(false);
  const [transactionid, setTransactionid] = useState("");
  const [bankTransactionid, setBankTransactionid] = useState("");
  const [bank, setBank] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (transactionid) {
      const data = {
        reminder,
        invitation,
        packages,
        transactionid,
        transaction: online,
      };
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/online/createOnlineEvent`,
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
        reminder,
        invitation,
        packages,
        transactionid: bankTransactionid,
        transaction: bank,
      };
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/online/createOnlineEvent`,
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

  const handleChange = (e) => {
    setReminder(e.target.value);
  };

  return (
    <>
      {!payment ? (
        <form className="flex flex-col bg-yellow-200 w-8/12 mx-auto px-10 py-5">
          <div className="py-5">
            <label htmlFor="reminder">Custom Reminder </label>
            <div className="flex flex-col">
              <div className="flex">
                <input
                  type="radio"
                  id="1"
                  name="reminder"
                  value="1"
                  checked={reminder === "1"}
                  onChange={handleChange}
                />{" "}
                <p>1 day</p>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  id="7"
                  name="reminder"
                  value="7"
                  checked={reminder === "7"}
                  onChange={handleChange}
                />{" "}
                <p>7 days</p>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  id="15"
                  name="reminder"
                  value="15"
                  checked={reminder === "15"}
                  onChange={handleChange}
                />{" "}
                <p>15 days</p>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  id="30"
                  name="reminder"
                  value="30"
                  checked={reminder === "30"}
                  onChange={handleChange}
                />
                <p>1 month</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="invitation" className="pb-3">
              Custom Invitation
            </label>
            <textarea
              name="invitation"
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setInvitation(e.target.value)}
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

export default Form;
