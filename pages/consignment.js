import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router';


var counter = 0;
for(let i = 0; i<4; i++){
  counter++
  console.log(counter)
  if (counter===3){
      printPage();
  }
}
  // Print Page
  function printPage() {
    // window.print()
   }


export default function Home() {
    // State variables
    const [free, setFree] = useState(false);
    const [chgReturned, setChgReturned] = useState(false);
    const [chgSuccess, setChgSuccess] = useState(false)
    const [delReturned, setDelReturned] = useState(false);
    const [delSuccess, setDelSuccess] = useState(false)
    const [blkReturned, setBlkReturned] = useState(false);
    const [blkSuccess, setBlkSuccess] = useState(false)
    const [users, setUsers] = useState({})
    const [target, setTarget] = useState('')
    const [typUser, setTypUser] = useState('')
    const [field, setField] = useState('')
    const [anyUser, setAnyUser] = useState(true)
    const[blocked, setBlocked] = useState(false)


    const[number, setNumber] = useState('')
    const[sName, setSName] = useState('')
    const[rName, setRName] = useState('')
    const[rAddress, setRAddress] = useState('')
    const[sAddress, setSAddress] = useState('')
    const[sEmail, setSEmail] = useState('')
    const[rEmail, setREmail] = useState('')
    const[rPhone, setRPhone] = useState('')
    const[sPhone, setSPhone] = useState('')
    const[origin, setOrigin] = useState('')
    const[destination, setDestination] = useState('')
    const[pkg, setPkg] = useState(0)
    const[weight, setWeight] = useState(0)
    const[status, setStatus] = useState('')
    const[product, setProduct] = useState('')
    const[carrier, setCarrier] = useState('')
    const[shipMode, setShipMode] = useState('')
    const[quantity, setQuantity] = useState(0)
    const[refNo, setRefNo] = useState(0)
    const[deptDate, setDeptDate] = useState()
    const[pickDate, setPickDate] = useState()
    
    const[hisDate, setHisDate] = useState()
    const[hisLocation, setHisLocation] = useState()
    const[hisStatus, setHisStatus] = useState()
    const[tin, setTin] = useState()
    

    const[tfReturned, setTfReturned] = useState(false)
    const[tfSuccess, setTfSuccess] = useState(false)


    const router = useRouter();



  

    // Get all Users
    const populateUsers = async () => {
        const number1 = localStorage.getItem('number1')
        console.log(number1)
        const res = await fetch('https://dak-server.vercel.app/api/quote/getItem', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    "number" : number1
                })
            })
        if(res.ok){
            const refined = await res.json()
            console.log(refined);
            setTin(refined.item)
            setFree(true)
        
            
        }
      }

    useEffect(() => {
            populateUsers();
            
    }, [])





        // Waiter
        const Waiter = () => {
            return(
                <div className="d-flex jac column waiter ht-50">
                    <div className="py-3">
                        <Loader />
                    </div>
                </div>
            )
        }
    
        // Spinner
        const Loader = () => {
            return(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border clt-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }


    const TrackSuit = ({ data }) => {
        const Table1 = () => {
          return(
            <table className="table" >
    <thead>
      <tr>
        <th scope="col">Property</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td  className="font2">Origin</td>
        <td  className="font3">{data.origin}</td>
      </tr>
      <tr>
        <td className="font2">Destination</td>
        <td className="font3">{data.dest}</td>
      </tr>
      <tr>
        <td className="font2">Package</td>
        <td className="font3">{data.pkg}</td>
      </tr>
      <tr>
        <td className="font2">Status</td>
        <td className="font3">{data.status}</td>
      </tr>
      <tr>
        <td className="font2">Weight</td>
        <td className="font3">{data.weight}</td>
      </tr>
      <tr>
        <td className="font2">Product</td>
        <td className="font3">{data.product}</td>
      </tr>
      <tr>
        <td className="font2">Carrier</td>
        <td className="font3">{data.carrier}</td>
      </tr>
      <tr>
        <td className="font2">Shipping Mode</td>
        <td className="font3">{data.shipMode}</td>
      </tr>
      <tr>
        <td className="font2">Quantity</td>
        <td className="font3">{data.qty}</td>
      </tr>
      <tr>
        <td className="font2">Reference No.</td>
        <td className="font3">{data.refNo}</td>
      </tr>
      <tr>
        <td className="font2">Departure Date</td>
        <td className="font3">{data.delDate}</td>
      </tr>
      <tr>
        <td className="font2">Pickup Date</td>
        <td className="font3">{data.pickDate}</td>
      </tr>
   
    </tbody>
  </table>
          )
        }
        const Table2 = () => {
          const shipHistory = data.shipHistory
  
          return(
            <table className="table clb-1 text-light">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>Origin</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr> */}
  
              {
                shipHistory.map(item => {
                  return(
                    <tr key={item.status} className="font3">
                      <td>{item.date}</td>
                      <td>{item.location}</td>
                      <td>{item.status}</td>
                    </tr>
                  )
                })
              }
              
          
            </tbody>
          </table>
          )
        }
        
  
        const Info12 = () => {
          const infom = data.shipper
          return(
            <div className="ml-1 d-flex features jb px-sm-2 mb-3 boda-sm py-2">
            <div className="mb-2">
              <h5>From</h5>
              <p className="lead p-0 my-4 font3 boda-b1"><span className="font2 mx-1 mx-sm-5">Name : </span> {infom.name}</p>
              <p className="lead p-0 my-4 font3 boda-b1"><span className="font2 mx-1 mx-sm-5">Address : </span> {infom.address}</p>
              <p className="lead p-0 my-4 font3 boda-b1"><span className="font2 mx-1 mx-sm-5">Phone : </span> {infom.phone}</p>
              <p className="lead p-0 my-4 font3 boda-b1"><span className="font2 mx-1 mx-sm-5">Email : </span> {infom.email}</p>
            </div>
            <div className="boda1 d-sm-none"></div>
            <div className="mb-2">
              <h5>To</h5>
              <p className="lead p-0 my-4 font3 boda-b1"><span className="font2 mx-1 mx-sm-5">Name : </span> {data.reciever.name}</p>
              <p className="lead p-0 my-4 font3 boda-b1"><span className="font2 mx-1 mx-sm-5">Address : </span> {data.reciever.address}</p>
              <p className="lead p-0 my-4 font3 boda-b1"><span className="font2 mx-1 mx-sm-5">Phone : </span> {data.reciever.phone}</p>
              <p className="lead p-0 my-4 font3 boda-b1"><span className="font2 mx-1 mx-sm-5">Email : </span> {data.reciever.email}</p>
            </div>
            
          </div>
          )
        }
        return(
          <div className="tracksuit boda-1 p-1 p-sm-5 br-10">
 
            <div className="" id='file'>
  
              <p className="ml-1 font3">Tracking Id: {data.number}</p>
              {/* line1 */}
              <div className=" ml-1 d-flex jab">
                
                <div className="">
                <img alt='Barcode Generator TEC-IT' height={50} width={130}
                    src={`https://barcode.tec-it.com/barcode.ashx?data=${data.number}&code=Code128&translate-esc=on`} />
                </div>
                <div className="mx-2">
                  <Image src="/logo.png" height={50} width={150} className="" />
                </div>
              </div>
  
              {/* info1 */}
              <div className="my-5">
              <Info12 />
              </div>


        
              
              {/* table1 */}
               <h4 className="">Shipment Information</h4>
              <div className="boda1-sm pb-5">
              <Table1 />
              </div> 
  
  
              {/* table2 */}
               <h4 className="mt-5">Shipment History</h4>
              <div className="">
              <Table2 />
              </div> 
  
            </div>
          </div>
        )
      }

    //Body
    const Body = () => {
        return(
            <div className="container px-3">
                   
                    <div className="container d-flex clt-1 py-3" onClick={() => {router.back()}}>
                        <i className="bi bi-arrow-left h4 "></i>
                        <h6 className="px-2">Back</h6>
                    </div>
                    
                    <div className=" mb-4">
                        <div className="d-flex jab">
                            <h4 className="">Shipment Receipt</h4>
                        </div>
                        <TrackSuit data={tin} />
                    </div> 
            </div>
        )
    }


    // return
    return(
        <>
      <Head>
        <title>Receipt - kadxpress</title>
        <meta name="description" content="Your favorite trustworthy shipping firm" />
        <link rel="icon" href="/rob.png" />
      </Head>
      <Script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></Script>


        {free ? <Body /> : <Waiter />}
        </>
)}