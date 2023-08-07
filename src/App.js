import logo from './bar.jpg';
import {useState} from 'react';

function App() {
  const [senderName, setSenderName] = useState("Alnourish Healthy Foods Private Limited");
  const [senderAddress, setSenderAddress] = useState("P14, Arihant Hospital, Sector 52, Gurgaon, Haryana Gurgaon - 122002 Haryana, India");
  const [senderPhone, setSenderPhone] = useState("9811521251");
  const [senderGST, setSenderGST] = useState("06AARCA4700BZ4");
  
  const [billerName, setBillerName] = useState("Deepak Manhar");
  const [billerAddress, setBillerAddress] = useState("Cheera baba wali gali teja ka makaan sahispura shivpuri, Madhya Pradesh, 473551");
  const [billerPhone, setBillerPhone] = useState("9811521251");
  const [billerGST, setBillerGST] = useState("06AARCA4700BZ4");
  const [billerPlace, setBillerPlace] = useState("");

  const [invoiceNo, setInvoiceNo] = useState("INS00100");
  const [invoiceDate, setInvoiceDate] = useState("22-mar-2023");
  const [invoiceDue, setInvoiceDue] = useState("22-mar-2023"); 

  
  const itemsArray = [
    {
      sno : 1,
      productName : "SUPER COLLAGEN | For Naturally Glowing & Radiant Skin",
      hsn:"AX455",
      quantity: 2,
      rate: 200,
      discount: 53,
      tax_Amount:1500,
      sGST:2,
      cGST:3,
      cess:5,
      otherCharges:50,
      total_Amount:499.00,
    }
  ];

  return (
    <div className=" text-3xl m-2 border-2 border-black lg:mx-32 sm:mx-0 md:mx-0 xl:mx-80">
      <div className='grid grid-rows-2 grid-cols-2 flex'>
        <div className="p-3 w-full">
          <h1 className="text-2xl font-semibold">Sender</h1>
          <h2 className="my-2 text-xl font-semibold">{senderName}</h2>
          <p className="text-sm">{senderAddress}<br/> Ph No. {senderPhone} <br/> GSTIN:{senderGST}</p>
        </div>

        <div className="border-1 border-black grid grid-cols-3 ">
          <div className="border-l-2 border-r-2 border-black text-xl text-center font-semibold py-12">Invoice No. <p className="text-sm font-normal">{invoiceNo}</p></div>
          <div className="border-1 grid grid-rows-2 h-[190px] ">
            <div className="border-d-1 text-xl text-center font-semibold py-6">Invoice Date <p className="text-sm font-normal">{invoiceDate}</p></div>
            <div className="border-t-2 border-black text-xl text-center font-semibold py-6">Invoice Due <p className="text-sm font-normal">{invoiceDue}</p></div>
          </div>
          <div className="flex-auto border-l-2 border-black  p-8 pt-10"><img src={logo} alt="bar" /></div>
        </div>
      
        <div className="border-t-2 border-black  p-2">
          <h1 className="text-xl font-semibold">Bill To</h1>
          <h2 className="my-2 text-xl font-semibold">{billerName}</h2>
          <p className="text-sm">{billerAddress}<br/> Ph No. {billerPhone} <br/> GSTIN: {billerGST} <br/> Place of Supply:{billerPlace}</p> 
        </div>

        <div className="border-t-2 border-l-2 border-black p-2">
          <h1 className="text-xl font-semibold">Deliver To</h1>
          <h2 className="my-2 text-xl font-semibold">{billerName}</h2>
          <p className="text-sm">{billerAddress}<br/> Ph No. {billerPhone} <br/> GSTIN: {billerGST} <br/> Place of Supply:{billerPlace}</p> 
        </div>
      </div>

      <div className=" pt-2 pb-2 flex-auto border-t-2 border-black h-auto text-center ">
        <table className=" text-sm text-auto h-auto w-full">
            <tr className="border-b-2 border-black">
              <th>S.No.</th>
              <th className="w-[170px]">Product Name</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Discount%</th>
              <th>Taxable<br/> Amt.</th>
              <th>SGST%</th>
              <th>CGST%</th>
              <th>Cess%</th>
              <th>Other<br/> Charges</th>
              <th>Total <br/> Amount</th>
              
            </tr>
            
            <tr className="font-semibold">
              <td>{itemsArray[0].sno}</td>
              <td className="text-left">{itemsArray[0].productName} <p className="font-thin text-xs">HSN Code: {itemsArray[0].hsn}</p></td>
              <td >{itemsArray[0].quantity}</td>
              <td>{itemsArray[0].rate}</td>
              <td>{itemsArray[0].discount}</td>              
              <td>{itemsArray[0].tax_Amount}</td>              
              <td>{itemsArray[0].sGST}</td>              
              <td>{itemsArray[0].cGST}</td>              
              <td>{itemsArray[0].cess}</td>              
              <td>{itemsArray[0].otherCharges}</td>              
              <td>{itemsArray[0].total_Amount}</td>              
            </tr>

            <tr className="font-semibold">
              <td>{itemsArray[0].sno}</td>
              <td className="text-left">{itemsArray[0].productName} <p className="font-thin text-xs">HSN Code: {itemsArray[0].hsn}</p></td>
              <td >{itemsArray[0].quantity}</td>
              <td>{itemsArray[0].rate}</td>
              <td>{itemsArray[0].discount}</td>              
              <td>{itemsArray[0].tax_Amount}</td>              
              <td>{itemsArray[0].sGST}</td>              
              <td>{itemsArray[0].cGST}</td>              
              <td>{itemsArray[0].cess}</td>              
              <td>{itemsArray[0].otherCharges}</td>              
              <td>{itemsArray[0].total_Amount}</td>              
            </tr>

            <tr className="font-semibold">
              <td>{itemsArray[0].sno}</td>
              <td className="text-left">{itemsArray[0].productName} <p className="font-thin text-xs">HSN Code: {itemsArray[0].hsn}</p></td>
              <td >{itemsArray[0].quantity}</td>
              <td>{itemsArray[0].rate}</td>
              <td>{itemsArray[0].discount}</td>              
              <td>{itemsArray[0].tax_Amount}</td>              
              <td>{itemsArray[0].sGST}</td>              
              <td>{itemsArray[0].cGST}</td>              
              <td>{itemsArray[0].cess}</td>              
              <td>{itemsArray[0].otherCharges}</td>              
              <td>{itemsArray[0].total_Amount}</td>              
            </tr>

            <tr className="font-semibold">
              <td>{itemsArray[0].sno}</td>
              <td className="text-left">{itemsArray[0].productName} <p className="font-thin text-xs">HSN Code: {itemsArray[0].hsn}</p></td>
              <td >{itemsArray[0].quantity}</td>
              <td>{itemsArray[0].rate}</td>
              <td>{itemsArray[0].discount}</td>              
              <td>{itemsArray[0].tax_Amount}</td>              
              <td>{itemsArray[0].sGST}</td>              
              <td>{itemsArray[0].cGST}</td>              
              <td>{itemsArray[0].cess}</td>              
              <td>{itemsArray[0].otherCharges}</td>              
              <td>{itemsArray[0].total_Amount}</td>              
            </tr>

            <tr className="font-semibold">
              <td>{itemsArray[0].sno}</td>
              <td className="text-left">{itemsArray[0].productName} <p className="font-thin text-xs">HSN Code: {itemsArray[0].hsn}</p></td>
              <td >{itemsArray[0].quantity}</td>
              <td>{itemsArray[0].rate}</td>
              <td>{itemsArray[0].discount}</td>              
              <td>{itemsArray[0].tax_Amount}</td>              
              <td>{itemsArray[0].sGST}</td>              
              <td>{itemsArray[0].cGST}</td>              
              <td>{itemsArray[0].cess}</td>              
              <td>{itemsArray[0].otherCharges}</td>              
              <td>{itemsArray[0].total_Amount}</td>              
            </tr>

            <tr className="font-semibold">
              <td>{itemsArray[0].sno}</td>
              <td className="text-left">{itemsArray[0].productName} <p className="font-thin text-xs">HSN Code: {itemsArray[0].hsn}</p></td>
              <td >{itemsArray[0].quantity}</td>
              <td>{itemsArray[0].rate}</td>
              <td>{itemsArray[0].discount}</td>              
              <td>{itemsArray[0].tax_Amount}</td>              
              <td>{itemsArray[0].sGST}</td>              
              <td>{itemsArray[0].cGST}</td>              
              <td>{itemsArray[0].cess}</td>              
              <td>{itemsArray[0].otherCharges}</td>              
              <td>{itemsArray[0].total_Amount}</td>              
            </tr>

            <tr className="font-semibold">
              <td>{itemsArray[0].sno}</td>
              <td className="text-left">{itemsArray[0].productName} <p className="font-thin text-xs">HSN Code: {itemsArray[0].hsn}</p></td>
              <td >{itemsArray[0].quantity}</td>
              <td>{itemsArray[0].rate}</td>
              <td>{itemsArray[0].discount}</td>              
              <td>{itemsArray[0].tax_Amount}</td>              
              <td>{itemsArray[0].sGST}</td>              
              <td>{itemsArray[0].cGST}</td>              
              <td>{itemsArray[0].cess}</td>              
              <td>{itemsArray[0].otherCharges}</td>              
              <td>{itemsArray[0].total_Amount}</td>              
            </tr>

            <tr className="font-semibold">
              <td>{itemsArray[0].sno}</td>
              <td className="text-left">{itemsArray[0].productName} <p className="font-thin text-xs">HSN Code: {itemsArray[0].hsn}</p></td>
              <td >{itemsArray[0].quantity}</td>
              <td>{itemsArray[0].rate}</td>
              <td>{itemsArray[0].discount}</td>              
              <td>{itemsArray[0].tax_Amount}</td>              
              <td>{itemsArray[0].sGST}</td>              
              <td>{itemsArray[0].cGST}</td>              
              <td>{itemsArray[0].cess}</td>              
              <td>{itemsArray[0].otherCharges}</td>              
              <td>{itemsArray[0].total_Amount}</td>              
            </tr>
        </table>  
      </div>    

      <div className="flex-auto border-t-2 my-auto border-b-2 border-black ">
      <table className="my-auto table-auto text-sm w-full text-center divide-black divide-y-2">
            <tr className=" divide-black divide-x-2">
              <th>Taxable Amt</th>
              <th>SGST Amt</th>
              <th>CGST Amt</th>
              <th>Cess Amt</th>
              <th>Round off Amt</th>
              <th>Total Invoice Amt</th>
            </tr>
            <tr className="divide-x-2 divide-black">
              <td>2486</td>
              <td>240</td>
              <td>200</td>
              <td>150</td>
              <td>0.55</td>
              <td>500</td>
            </tr>

            
          </table>
          <div className="text-sm p-3 border-t-2 border-black font-semibold">
            <h1>e-Invoice Details</h1>
            <div className="flex space-x-8 w-full">
              <p className="my-2">IRN: <span className="font-normal">918319386594</span> </p>
              <p className="my-2">Ack No: <span className="font-normal">9183193</span> </p>
              <p className="my-2">Ack Date: <span className="font-normal">11/08/2023</span> </p>
              <p className="my-2">Supply Type Code: <span className="font-normal">HS225</span> </p>
              <p className="my-2">Document Type Code: <span className="font-normal">HS225</span> </p>
            </div>
          </div>

          <div className="text-sm p-2 border-t-2 border-black font-semibold">
            <h1>Transaction Details</h1>
            <div className="flex space-x-12 w-full">
              <p className="my-2">Category: <span className="font-normal">918319386594</span> </p>
              <p className="my-2">Document No: <span className="font-normal">918319386594</span> </p>
              <p className="my-2">Document Date: <span className="font-normal">11/08/2023</span> </p>
            </div>
          </div>
        
      </div>  

      <div className="flex-auto p-3">
          <h1 className="text-lg font-semibold">Notes</h1>
          <p className="text-sm">All claims, if any, for shortages or damages must be reported to customer service on the day of delivery through contact us page at movo.in</p>

          <h2 className="my-2 text-lg font-semibold">Terms and Conditions</h2>
          <p className="text-sm">1. All claims, if any, for shortages or damages must be reported to customer service on the day of delivery through contact us page at movo.in</p>
          <p className="text-sm">2. All Disputes are subject to Madhya Pradesh jurisdiction only.</p>
      </div>
    </div>
  );
}

export default App;
