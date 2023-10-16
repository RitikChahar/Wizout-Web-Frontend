import Feed from "./Feed";
import MessageBox from "./MessageBox";
import Something from "./Something";

export default function Overview(params) {
  return (
    <>
      <div className="grid grid-cols-12 items-start justify-between gap-8 ps-28 pe-10 py-10">
        <MessageBox />
        <Feed />
        <Something />
      </div>
    </>
  );
}
