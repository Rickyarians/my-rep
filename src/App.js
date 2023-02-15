import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import { convertMAC, createPyramid, generateArrayNumberPattern } from './helper';
import Car from './Car';

const list_mobil = [
  ['Mobil A', 'Merah', 120, 300, 'Toyota'],
  ['Mobil B', 'Biru', 130, 350, 'Honda'],
  ['Mobil C', 'Grey', 110, 250, 'Suzuki']
]




function App() {

  

  // Regex
  const [regex, setRegex] = useState('')
  const [resultRegex, setResultRegex] = useState('')

  // Regex
  const [start, setStart] = useState('')
  const [height, setHeight] = useState(0)
  const [resultPyramid, setResultPyramid] = useState('')

  // Regex
  const [startNumber, setStartNumber] = useState(0)
  const [heightNumber, setHeightNumber] = useState(0)
  const [resultPyramidNumber, setResultPyramidNumber] = useState('')
  
  const [deret, setDeret] = useState('')
  const [deretLength, setDeretLength] = useState(0)
  const [resultDeret, setResultDeret] = useState('')
  
  // User Data
  const [user, setUser] = useState(null)


  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    ).then((response) => response.json());
  
    // update the state
    setUser(response);
  };

  const convertMACFunction = () => {
      setResultRegex(convertMAC(regex))
  }

  const createPyramidfunc = () => {
      if(height == 0) {
        alert('Please input Height Pyramid')
        return
      } 

      if(!start) {
        alert('Please Input Start Value')
        return
      }

      let result = createPyramid(start, height)
      setResultPyramid(result)
  }

  const pascal = (numberOfRows) => {
    let pascalsTriangle = new Array(numberOfRows);

    for(let i = 0; i<numberOfRows; i++) {
        let line = new Array(i+1);
        line[0] = 1;
        line[line.length - 1] = 1;

        for (let n = 1; n<line.length - 1; n++){
            let previousLine = pascalsTriangle[i-1];
            line[n] = previousLine[n] + previousLine[n-1]
        }
        pascalsTriangle[i] = line;
    }
    return pascalsTriangle
}

  const createPyramidfNumber = () => {
    if(heightNumber == 0) {
      alert('Please input Height Pyramid')
      return
    } 
   
    let stringHtml = pascal(heightNumber).map((line, i) => 
          "&nbsp;".repeat(heightNumber - i) + line.join(" ")
      ).join("<br>");

      setResultPyramidNumber(stringHtml)
  }

  const generateDeret = () => {
      let arr = deret.split(',').map(Number)
      let result = generateArrayNumberPattern(arr, deretLength)

      setResultDeret(result)
  }

  

  useEffect(() => {
    getApiData()
  }, []);
  return (
    <div className="App">

    <div>
     <h3 className="text-left">1. OOP React</h3>
      <div className="text-left">
        {
          list_mobil.length > 0 && list_mobil.map((item) => {
            return <Car key={item[0]} name={item[0]} color={item[1]} speed={item[2]} price={item[3]} brand={item[4]}/>
          })
        }
      </div>
     </div>

   <div>
     <h3 className="text-left">2. Regex dalam pemrograman ReactJS</h3>
      <div className="text-left">
      
           <ol>
             <li>
               fill the input form, with value (exp : 21090022002346,FCD5D9D34A6F )
             </li>
             <li>
               click "convert" button
             </li>
             <li>
               see Result
             </li>
             <li>
               click "clear" button for clear the result
             </li>
          </ol>
        
         <input value={regex} onChange={(e) => setRegex(e.target.value)}/>
         <button onClick={() => convertMACFunction()}>Convert</button>
         <button onClick={() => {
           setRegex('')
           setResultRegex('')
         }}>Clear</button>
         <br/>
         <br/>
         <div>
           Result : {resultRegex}
         </div>
      </div>
     </div>


    <div>
     <h3 className="text-left">3. Database</h3>
      <div className="text-left">
      <code>
        select us.nama as nama_customer, al.alamat as alamat_customer, cls.alamat as cluster_customer from user as us 
        INNER JOIN alamat as al 
        ON us.cid=al.cid
        INNER JOIN cluster as cls
        ON us.cluster_id=cls.cid;
      </code>
      <br/>
      <br/>
      <img src={require('./assets/result-query.png')} style={{width: '100%'}}/>
      </div>
     </div>
    
     <div>
        <h3 className="text-left">4. Deret Bilangan</h3>
        <div className="text-left">
            <ol>
                    <li>
                      fill the input form deret, with value (exp : 5, 8, 11, 14, 17)
                    </li>
                    <li>
                      fill the input form length, with value (exp : 10)
                    </li>
                    <li>
                      click "Generate" button
                    </li>
                    <li>
                      see Result
                    </li>
                    <li>
                      click "clear" button for clear the result
                    </li>
                  </ol>
        </div>
        <div className="text-left">

           
            <label>Start </label>
            <input value={deret} onChange={(e) => setDeret(e.target.value)}/>
            <label> Length </label>
            <input value={deretLength} max="100" type="number" onChange={(e) => setDeretLength(
              e.target.value > 100 ? 100 : e.target.value
            )}/>
            
            <button onClick={() => generateDeret()}>Generate</button>
            <button onClick={() => {
              setResultDeret('')
              setDeret('')
              setDeretLength(0)
            }}>Clear</button>
            <br/>
            <br/>
            <div>
              Result :
              <div dangerouslySetInnerHTML={{__html: resultDeret}} />
         </div>
        </div>
     </div>
      

     <div>
     <h3 className="text-left">5. Create Pyramid</h3>
      <h5 className="text-left"> - Pyramid Character</h5>
      <div className="text-left">
         <label>Deret (dipisahkan dengan koma) </label>
         <input value={start} maxLength={1} onChange={(e) => setStart(e.target.value)}/>
         <label> length </label>
         <input value={height} max="5" type="number" onChange={(e) => setHeight(
           e.target.value > 5 ? 5 : e.target.value
         )}/>
         
         <button onClick={() => createPyramidfunc()}>Convert</button>
         <button onClick={() => {
           setResultPyramid('')
           setStart('')
           setHeight(0)
         }}>Clear</button>
         <br/>
         <br/>
         <div>
           Result :
           <div dangerouslySetInnerHTML={{__html: resultPyramid}} />
         </div>
      </div>
      <br/>
      
      <div className="text-left">
        <h5 className="text-left"> - Pyramid Number</h5>
         <label> Height </label>
         <input value={heightNumber} max="5" type="number" onChange={(e) => setHeightNumber(
           e.target.value > 100 ? 100 : e.target.value
         )}/>
         
         <button onClick={() => createPyramidfNumber()}>Convert</button>
         <button onClick={() => {
           setResultPyramidNumber('')
           setStartNumber('')
           setHeightNumber(0)
         }}>Clear</button>
         <br/>
         <br/>
         <div>
           Result :
           <div dangerouslySetInnerHTML={{__html: resultPyramidNumber}} />
         </div>
      </div>
     </div>


     {/* Nomor 6 */}
      <div>
        <h3 className="text-left">6. Fetch data API dalam pemrograman ReactJS</h3>
        <h3 className="text-left">User Data</h3>
      <table>
         <tbody>
         <tr className="text-left">
            <td className="fw-bold">Name</td>
            <td>:</td>
            <td>{user?.name}</td>
        </tr>
        <tr className="text-left">
            <td className="fw-bold">Website</td>
            <td>:</td>
            <td>{user?.website}</td>
        </tr>
        <tr className="text-left">
            <td className="fw-bold">Email</td>
            <td>:</td>
            <td>{user?.email}</td>
        </tr>
        <tr className="text-left">
            <td className="fw-bold">Phone</td>
            <td>:</td>
            <td>{user?.phone}</td>
        </tr>
         </tbody>
      </table>
      </div>
     
    </div>
  );
}

export default App;
