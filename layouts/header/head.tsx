import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css"
import Image from "next/image";
import img1 from "../../public/ah.png"
import img2 from "../../public/next.svg"
import HeadMain from '../header/mainHead'
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
   <div  className={styles.head1}> 
   <Image className={styles.headfoto}
   src={img1}
   alt="cover foto"
   objectPosition="center"
   objectFit="cover"
    />
   <div className= {styles.parentoflink}>
   <span className={styles.headlogo}><img src={img2} alt="logo" width={40} height={40}  /></span>
   <Link href="/">ABOUT US </Link>
   <Link href="/">Products </Link>
   <Link href="/">News</Link>
   <Link href="/">Application </Link>
   <Link href="/">Achievements </Link>
   <Link href="/">Cilent Says </Link>
   <Link href="/">Contact Us </Link>
   <Link href="/">Contact sales </Link>
   <Link href="/">log in </Link>
   <Link href="/">Get Started</Link>
   <p className={styles.headmenu}>menu of icons </p>
   </div> 
   <H1/>
   <H2 />
   </div>
   </>
    );
}
export default Header;
