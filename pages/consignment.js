import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router';






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
    const [goAble, setGoAble] = useState(false);


    const router = useRouter();



  

    // Get all Users
    const populateUsers = async () => {
    
        const res1 = await fetch('https://dak-server.vercel.app/api/update/get')
        const num = await res1.json()
      console.log(num.item)

        const res = await fetch('https://dak-server.vercel.app/api/quote/getItem', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    "number" : num.item
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

    useEffect(() => {
  // Print Page
      setTimeout(() => {
        window.print()
      }, 6000)
    }, [])

    useEffect(() => {
      // Print Page
          setTimeout(() => {
            setGoAble(true)
          }, 12000)
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
    const Body = ({ data }) => {
        return(
            <div className=" containe  recq">
                    {goAble &&
                      <div className="container d-flex clt-1 py-3" onClick={() => {router.back()}}>
                          <i className="bi bi-arrow-left h4 "></i>
                          <h6 className="px-2">Back</h6>
                      </div>
                   }
                    
                    <div className=" mb-4">
                        <div className="d-flex jab">
                            {/* <h4 className="">Shipment Receipt</h4> */}
                        </div>
                        {/* <TrackSuit data={tin} /> */}
                        <div className="prnt ">
                          <div className="d-g-pc py-5 ">
                            <img src="/rec2.jpg" alt="" srcset="" height={700} width={1200} className='boda2sp'/>
                            <hr />
                          </div>
                          <p className='pa1 fw-bold'><span className="clt-1">Sender's Name: </span> {tin.shipper.name}</p>
                          <p className='pa2 fw-bold'><span className="clt-1">Address: </span> {tin.shipper.address}</p>
                          <p className='pa3 fw-bold'><span className="clt-1">Email: </span> {tin.shipper.email}</p>
                          <p className='pa4 fw-bold'><span className="clt-1">Phone: </span> {tin.shipper.phone}</p>

                          <p className='pa5 fw-bold'><span className="clt-1">Receiver's Name: </span> {tin.reciever.name}</p>
                          <p className='pa6 fw-bold'><span className="clt-1">Address: </span> {tin.reciever.address}</p>
                          <p className='pa7 fw-bold'><span className="clt-1">Email: </span>{tin.reciever.email}</p>
                          <p className='pa8 fw-bold'><span className="clt-1">Phone: </span> {tin.reciever.phone}</p>
                          <h3 className='pa9 fw-bold clt-1'>{tin.number}</h3>
                          <h6 className='pa10 text-center clt-1'>{tin.origin}</h6>
                          <h6 className='pa11  text-center clt-1'>{tin.dest}</h6>
                          <p className='pa12 fw-bold'><span className="clt-1">ITEM: </span> {tin.product} ({tin.qty})</p>
                          <p className='pa13 fw-bold'><span className="clt-1">WEIGHT: </span> {tin.weight}</p>
                          <p className='pa14'>
                            Each registered consignment delivery shall be covered by a CMR Consignment Note drawn by KADXPRESS LOGISTICS based on information provided by <strong className='fw-bold'>{tin.shipper.name}</strong> (sender), according to Articles 6 and 7 of the CMR Convention. A copy of the consignment Note shall be given by delivery officer to <strong className='fw-bold'>{tin.reciever.name}</strong> (receiver) and shall be conclusive evidence of collection of the item described therein.  
                          </p>
                          <div className="pa15">
                            <img alt='Barcode Generator TEC-IT' height={50} width={130}
                                src={`https://barcode.tec-it.com/barcode.ashx?data=${tin.number}&code=Code128&translate-esc=on`} />
                          </div>
                          <p className='pa16'><span className="clt-1 fw-bold">Departure Date: </span> {tin.delDate}</p>
                          <p className='pa17'><span className="clt-1 fw-bold">Pickup Date: </span> {tin.pickDate}</p>
                          <div className="pa18">
                            <img src="/sign.jpg" alt="" srcset="" height={70} width={150} />
                          </div>
                        </div>

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