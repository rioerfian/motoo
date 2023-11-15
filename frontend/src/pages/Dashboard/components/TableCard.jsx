export default function TableCard(props, children) {
  return (
    <>
      <div>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className="font-bold">{props.title}</h3>
            </div>
            <div className="relative w-full max-w-full flex-grow flex-1 text-right">
              <a
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                href={props.href}
              >
                See all
              </a>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">{{ children }}</div>
      </div>
    </>
  );
}
