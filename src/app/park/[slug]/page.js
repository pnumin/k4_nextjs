import xmlJs from 'xml-js';
export default function Parkpage({params}) {
  console.log(params.slug)
  let url = `http://openapi.bisco.or.kr/open-api/service/rest/ParkingInfoService/getParkingInfo?ServiceKey=8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D&pParkGCd=${params.slug}` ;


  //npm install xml-js
  fetch(url)
  .then(resp => resp.text())
  .then((xmlText) => {
    const jsonData = xmlJs.xml2json(xmlText, { compact: true, spaces: 4 });
    console.log(JSON.parse(jsonData).response.body.items.item);
  })
  return (
    <div>
      Parkpage
    </div>
  );
}
