import TailLink from "./TailLink";
export default function TailHeaderMenu() {
  return (
    <div className="flex justify-between item-center border-b border-gray-200 p-4">
      <div>
        Next JS 실습
      </div>
      <nav>
        <TailLink href="/lec/clock" title="clock" />
        <TailLink href="/lec/lotto" title="Lotto" />
        <TailLink href="/lec/boxoffice" title="Boxoffice" /> 
        <TailLink href="/lec/boxoffices" title="최신Boxoffice" /> 
        <TailLink href="/park/A01" title="주차1" /> 
        <TailLink href="/park/A02" title="주차2" /> 
        <TailLink href="/" title="Home" /> 
      </nav>
    </div>
  );
}
