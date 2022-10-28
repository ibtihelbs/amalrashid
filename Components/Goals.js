
const Goals = () => {
  return (
    <div className='md:flex md:flex-row flex flex-col flex content-center h-screen'>
        <div>
        <h1 className="md:text-[8em] text-[3rem] text-right text-blue font-extrabold">
        أهداف  
        </h1>
        <h1 className="md:text-[8em] text-[3rem] text-right text-blue font-extrabold">
         الجمعية
        </h1>
        </div>
          <ul className="goal text-white flex flex-col content-around gap-4 w-full">
            <li className="bg-green md:p-4 p-2 md:text-[1em] text-[.5rem] text-right shadow-md">المساهمة في تقليص مظاهر التلوث.</li>
            <li className="bg-green md:p-4 p-2 md:text-[1em] text-[.5rem] text-right shadow-md">المساهمة في جعل مساحات الثقافة والترفيه متاحة لجميع فئات المجتمع.</li>
            <li className="bg-green md:p-4 p-2 md:text-[1em] text-[.5rem] text-right shadow-md">نشر ثقافة الرسكلة وتثمين النفايات.</li>
          </ul>
    </div>
  )
}

export default Goals
