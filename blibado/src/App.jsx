import './App.scss'
import { Container } from './components/Container/Container'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Location } from './components/Location/Location'
import { Gallery } from './components/Gallery/Gallery'
import { Footer } from './components/Footer/Footer'

function App() {


  return (
    <>
      <Container>
        <Header />
        <Navbar />
        <h2>Om os</h2>
        <About video='videoblibado.mp4' aboutHeader='Begyndelsen' aboutText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus eius nulla, nisi commodi a voluptatum amet doloremque, unde beatae sit inventore, illum provident sed eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel magni sunt laudantium deleniti eos dolorum magnam. Velit aut ducimus, sunt repellendus nulla' />
        <h2>Locations</h2>
        <div className='locationGrid'>
        <Location img='Location-01-01.jpg' locationHeader='Location 1' locationAdult='2' locationChild='3' locationWashingMachine='Ja' locationReservationReq='Minimum reservation er 3 nætter for at kunne tilbyde længere ophold. Spørg venligst ikke om mindre.' locationPrice='600' locationDescription='Lejligheden ligger i en gammel bygning med høj til loftet, masser af lys og en balkon, der vender lige mode syd, så du kan nyde solopgangen og solnedgangen med udsigt over havet og den lille havn.' />
        <Location img='Location-02-01.jpg' locationHeader='Location 2' locationAdult='4' locationChild='4' locationWashingMachine='Nej' locationReservationReq='Minimum reservasion er 2 nætter' locationPrice='550' locationDescription='Nyd udsigten fra den store balkon i en klassisk møbleret lejlighed. Du har adgang til: En entre med et toilet (mulighed for bruser), to store værelser eget badeværelse, godt køkken og to soveværelser.' />
        <Location img='Location-03-01.jpg' locationHeader='Location 3' locationAdult='3' locationChild='4' locationWashingMachine='Nej' locationReservationReq='Minimum reservation er 5 nætter' locationPrice='650' locationDescription='62 kv/m Nyd udsigten fra den store balkon i en klassisk møbleret lejlighed. Du har adgang til: En entre med et toilet (mulighed for bruser), to store værelser eget badeværelse, godt køkken og to soveværelser.' />
        <Location img='Location-04-01.jpg' locationHeader='Location 4' locationAdult='2' locationChild='3' locationWashingMachine='Ja' locationReservationReq='Minimum reservation er 3 nætter for at kunne tilbyde længere ophold. Spørg venligst ikke on mindre' locationPrice='600' locationDescription='Lejligheden ligger i en gammel bygning med høj til loftet, masser af lys og en balkon, der vender lige mode syd, så du kan nyde solopgangen og solnedgangen med udsigt over havet og den lille havn.' />
        <Location img='Location-05-01.jpg' locationHeader='Location 5' locationAdult='2' locationChild='4' locationWashingMachine='Ja' locationReservationReq='Minimum reservation er 2 nætter' locationPrice='550' locationDescription='Nyd udsigten fra den store balkon i en klassisk møbleret lejlighed. Du har adgang til: En entre med et toilet (mulighed for bruser), to store værelser eget badeværelse, godt køkken og to soveværelser.' />
        <Location img='Location-06-01.jpg' locationHeader='Location 6' locationAdult='2' locationChild='4' locationWashingMachine='Nej' locationReservationReq='Minimum reservation er 6 nætter' locationPrice='950' locationDescription='Lakeview Cabin er en traditional træhytte, nyrenoveret i eksotisk stil. Direkte adgang til stranden udendørs bruser og sauna. Perfekt til par, livsnydere og natureskere' />
        </div>
        <h2>Aktuelt</h2>
        <Gallery img1='Location-06-01.jpg' img2='Location-06-01.jpg' img3='Location-06-02.jpg' img4='Location-06-03.jpg' img5='Location-06-04.jpg'/>
      <Footer/>
      </Container>
    </>
  )
}

export default App
