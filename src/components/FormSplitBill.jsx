import Button from "./Button"


const FormSplitBill = () => {
  return (
    <form className={`bg-green-300 p-12 text-white`}>
        <h3 className={`text-2xl font-bold`}>Split Bill with X</h3>
        <div className={`my-4 flex flex-row justify-between gap-3 mb-4`}>
        <label>Bill value</label>
        <input type={"number"} className={`rounded-md`}/>
      </div>
      <div className={`my-4 flex flex-row justify-between gap-3 mb-4`}>
        <label>Your Expense</label>
        <input type={"number"} className={`rounded-md`}/>
      </div>
      <div className={`my-4 flex flex-row justify-between gap-3 mb-4`}>
        <label>X&apos;s Expense</label>
        <input type={"disabled"} className={`rounded-md`}/>
      </div>
      <label className={`mr-4`}>Who is paying</label>
      <select className={`text-green-500 px-4 rounded-md`}>
        <option value={`user`}>You</option>
        <option value={`friend`}>X</option>
      </select>
      <Button className={`mt-6 px-6 py-2 rounded-lg bg-green-500`}>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill