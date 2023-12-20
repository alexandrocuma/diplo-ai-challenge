
export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[312px] h-[454px] bg-[#ECE6F0] border rounded-3xl p-6 flex flex-col">
        <span className="text-black text-2xl">
          DiploAI
        </span>
        <span className="text-[#49454F] text-justify tracking-tight text-sm my-6">
          DiploAI is a tool that helps companies and governments deal with increasing climate complexity and regulatory change, by using GenAI to identify their optimal strategy to achieve a given goal.
        </span>
        {
          new Array(3).fill("").map((_, index) => (
            <div key={`list-item-${index}`} className="flex justify-between py-2 border-[1px] border-b-[#CAC4D0]">
              <div className="flex items-center justify-between w-28">
                <span className="bg-[#EADDFF] text-[#21005D] rounded-full w-10 h-10 flex items-center justify-center">
                  A
                </span>
                <span className="text-black text-base">
                  List item
                </span>
              </div>
              <div className="flex items-center justify-between mr-2">
                <span className="text-black text-xs mr-4">
                  100+
                </span>
                <input type="checkbox" className="w-6 h-4 accent-[#6750A4]" />
              </div>
            </div>
          ))
        }
        <div className="flex justify-end mt-6">
          <button className="mx-2 text-[#6750A4]">
            Action 2
          </button>
          <button className="mx-2 text-[#6750A4]">
            Action 1
          </button>
        </div>
      </div>
    </div>
  )
}
