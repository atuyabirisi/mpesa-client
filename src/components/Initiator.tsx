import axios from "axios";
import { useForm } from "react-hook-form";

function Initiator() {
  const { register, handleSubmit, getValues, reset } = useForm();

  const initiateSTKPush = handleSubmit(() => {
    const values = getValues();
    axios
      .post(`https://mpesa-transx-e745e2d61633.herokuapp.com/stkpush`, {
        ...values,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => reset());
  });

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card w-25 p-2">
          <form onSubmit={initiateSTKPush}>
            <div className="d-flex justify-content-center py-3">
              <h5 className="card-tittle">Initiate an STKpush</h5>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">
                Phone No
              </label>
              <input
                {...register("phone", { required: true })}
                id="phone"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="amount">
                Amount
              </label>
              <input
                {...register("amount", { required: true })}
                id="amount"
                type="number"
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-success" type="submit">
                Initiate
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Initiator;
