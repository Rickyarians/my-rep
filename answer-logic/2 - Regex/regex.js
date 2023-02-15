/**
 Regex dalam pemrograman ReactJS


   Regex convert mac addres format

    • source:
    21090022002346,FCD5D9D34A6F
    21090022002838,FCD5D9D34C5B
    21090022002965,FCD5D9D34CDA
    21090022003748,FCD5D9D34FE9
    21090022003798,FCD5D9D3501B

    • output:
    21090022002346,FC:D5:D9:D3:4A:6F
    21090022002838,FC:D5:D9:D3:4C:5B
    21090022002965,FC:D5:D9:D3:4C:DA
    21090022003748,FC:D5:D9:D3:4F:E9
    21090022003798,FC:D5:D9:D3:50:1B
 */
const convertMAC = (string) => {
    let [number, mac] = string.split(',')
    let MACresult = mac.match( /.{1,2}/g )
    .join( ':' )

    return `${number},${MACresult}`
}


console.log(convertMAC('21090022002346,FCD5D9D34A6F'))
console.log(convertMAC('21090022002838,FCD5D9D34C5B'))
console.log(convertMAC('21090022002965,FCD5D9D34CDA'))
console.log(convertMAC('21090022003748,FCD5D9D34FE9'))
console.log(convertMAC('21090022003798,FCD5D9D3501B'))
