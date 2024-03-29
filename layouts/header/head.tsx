import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import img1 from "../../public/ah.png"
import img2 from "../../public/next.svg"
import H1 from '../header/ah'
import H2 from "../header/mainhead2"
function Header(){
    return(
    <>
   <Head>
   <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
   </Head> 
   <div  className= 'text-black   bg-white mb-[30px] '> 
   <Image className='z-0 w-full h-[1140px]   bg-cover absolute '
   src={img1}
   alt="cover foto"
   objectPosition="center"
   objectFit="cover"
    />
   <div className= 'flex flex-row w-full h-[100px] relative  justify-center items-center '>
   <span className='ml-2  pr-4'><Image src={img2} alt="logo" width={70} height={70}  /></span>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">ABOUT US </Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">Products </Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">News</Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">Application </Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">Achievements </Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">Cilent Says </Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">Contact Us </Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">Contact sales </Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">log in </Link>
   <Link className=' h-[20px] text-white mr-[10px] hover:text-red-900  ' href="/">Get Started</Link>
   
   <div className='h-[50px] w-[200px] relative flex flex-row  ml-2  pr-4 mt-8  ' > 
   <a href="#" className="p-[4px]  " ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#343434"
     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <g id="Facebook"><path d="M19.02,4.975A9.93,9.93,0,0,0,2.07,12,9.935,9.935,0,0,0,12,21.935a9.98,9.98,0,0,0,3.8-.75,10.189,10.189,0,0,0,3.22-2.16,9.934,9.934,0,0,0,0-14.05Zm-.7,13.34A8.921,8.921,0,0,1,13,20.885v-6.56h1.88a1,1,0,0,0,0-2H13V9.585a1,1,0,0,1,1-1h1.2a1,1,0,0,0,0-2H13.5a2.5,2.5,0,0,0-2.5,2.5v3.24H9.13a1,1,0,1,0,0,2H11v6.56a8.919,8.919,0,1,1,9.26-5.47A9.061,9.061,0,0,1,18.32,18.315Z">
</path></g></svg></a>

<a href="#" className="p-[4px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#343434" 
 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M511 4c138 0 155 1 209 3 53 2 90 11 123 24 34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123 2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123 13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24 54-2 71-3 209-3zm0 66c-144 0-161 1-217 3-52 2-81 12-100 19-49 20-82 53-102 102-7 19-17 48-19 100-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100 20 49 53 82 102 102 19 7 48 17 100 19 56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19 49-20 82-53 102-102 7-19 17-48 19-100 2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100-20-49-53-82-102-102-19-7-48-17-100-19-56-2-73-3-217-3zm0 644c112 0 203-91 203-203s-91-203-203-203-203 91-203 203 91 203 203 203zm0-463c144 0 260 116 260 260S655 771 511 771 251 655 251 511s116-260 260-260zm332-10c0 34-28 60-62 60s-60-26-60-60 26-62 60-62 62 28 62 62z">
    </path></svg></a>
    <a href="#" className="p-[4px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#343434"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Twitter">
        <path d="M19.913,5.322a1.034,1.034,0,0,1,.837,1.629L19.708,8.432c-.064,5.086-1.765,8.539-5.056,10.264A10.917,10.917,0,0,1,9.6,19.835a12.233,12.233,0,0,1-6.2-1.524.76.76,0,0,1-.317-.8.768.768,0,0,1,.63-.6,20.6,20.6,0,0,0,3.745-.886C2,13.5,3.19,7.824,3.71,6.081a1.028,1.028,0,0,1,1.729-.422,9.931,9.931,0,0,0,5.995,2.95A4.188,4.188,0,0,1,12.725,5.3a4.125,4.125,0,0,1,5.7.02ZM4.521,17.794c1.862.872,6.226,1.819,9.667.016,2.955-1.549,4.476-4.732,4.521-9.461a.771.771,0,0,1,.142-.436l1.081-1.538-.041-.053c-.518-.007-1.029-.014-1.55,0a.835.835,0,0,1-.547-.221,3.13,3.13,0,0,0-4.383-.072,3.174,3.174,0,0,0-.935,2.87.646.646,0,0,1-.154.545.591.591,0,0,1-.516.205A10.924,10.924,0,0,1,4.722,6.354c-.67,2.078-1.52,7.094,3.869,9.065a.632.632,0,0,1,.416.538.625.625,0,0,1-.3.6A13.178,13.178,0,0,1,4.521,17.794ZM11.875,8.65h0Zm7.793-.161,0,0Z">
        </path></g></svg></a>
        <a href="#" className="p-[4px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" color="#343434" 
         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z">
            </path></svg></a>
            <div  className=""><a href="#" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#343434"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                </path></svg></a></div>
      </div>
   </div> 
   <H1/>
   <H2 />
   </div>
   </>
    );
}
export default Header;
