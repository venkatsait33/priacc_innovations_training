import Card from './Card'
import Navbar from './Navbar'

const cardData = [
    {
        id: 1,
        name: "Paneer Butter Masala",
        price: 220,
        image: "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg",
        "publisher": "Home Chef"
    },
    {
        id: 2,
        name: "Chicken Biryani",
        price: 280,
        image: "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52268.jpg",
        "publisher": "Spice Route"
    },
    {
        id: 3,
        name: "Masala Dosa",
        price: 120,
        image: "https://img.freepik.com/free-photo/delicious-indian-dosa-arrangement_23-2149086025.jpg",
        "publisher": "South Kitchen"
    },
    {
        id: 4,
        name: "Mutton Rogan Josh",
        price: 320,
        image: "https://img.freepik.com/free-psd/delicious-beef-stew-wooden-bowl-hearty-flavorful-meal_191095-80160.jpg",
        "publisher": "Kashmir Delights"
    },
    {
        id: 5,
        name: "Chole Bhature",
        price: 150,
        image: "https://img.freepik.com/free-photo/delicious-indian-street-food-platter_23-2151998603.jpg",
        "publisher": "Punjabi Zaika"
    },
    {
        id: 6,
        name: "Fish Curry",
        price: 260,
        image: "https://img.freepik.com/free-photo/top-view-delicious-fish-meal_23-2148734691.jpg?ga=GA1.1.68082943.1759137280&semt=ais_hybrid&w=740&q=80",
        "publisher": "Coastal Tadka"
    },
    {
        id: 7,
        name: "Veg Pulao",
        price: 140,
        image: "https://img.freepik.com/free-photo/traditional-indian-dish-with-rice-close-up_23-2148294953.jpg?t=st=1759137784~exp=1759141384~hmac=66cc588f977fcd10a6d1d58e04d834dfe8f4c7bdf42870a78f19a1fd9cca5582&w=1060",
        "publisher": "Home Chef"
    },
    {
        id: 8,
        name: "Butter Chicken",
        price: 290,
        image: "https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246089.jpg",
        "publisher": "Delhi Zaika"
    },
    {
        id: 9,
        name: "Idli Sambar",
        price: 100,
        image: "https://img.freepik.com/premium-photo/idly-idli-south-indian-main-breakfast-item-which-is-beautifully-arranged-aqua-color-plates_527904-2876.jpg",
        "publisher": "South Kitchen"
    },
    {
        id: 10,
        name: "Prawn Masala",
        price: 300,
        image: "https://img.freepik.com/free-photo/high-angle-delicious-shrimp-meal_23-2148771278.jpg?t=st=1759137894~exp=1759141494~hmac=c9e5500cdb9165824adc9b433a4a9d5ef2b93007bf96ce22326eb930a5fb0534&w=1060",
        "publisher": "Coastal Tadka"
    }
]


const HomePage = () => {
  return (
      <div className=' mx-auto'>
          <div>
              <Navbar/>
          </div>
          <div className='flex items-center justify-center mt-10'>
             
              <input type="text"  className=' border-b-2'/>
              <button className=' bg-blue-500 p-2 rounded-md ml-2'>Search</button>
          </div>
          <div className=' grid md:grid-cols-3 max-w-5xl justify-center items-center mx-auto sm:grid-cols-2 mt-4 gap-3'>
              
          {
              cardData.map((item) => {
                  return(
                      <div >
                          <Card item={item} key={item.id} />
                     </div>
                  )
              })
          }
          </div>
      </div>
  )
}

export default HomePage