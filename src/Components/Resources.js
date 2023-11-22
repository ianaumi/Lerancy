import './ResourcesStyles.css';
import Card from './ResourcesData';
import card1 from '../Assets/card1.png'
import card2 from '../Assets/card2.png'
import card3 from '../Assets/card3.png'


function Resources () {
    return(
        <div className="main">
            <h2>Resources</h2>
            <div className='resourcescard'>
                <Card
                image={card1}
                heading={"Digital Literate Citizens: Think Critically, Click Wisely!"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in aliquet mi, ultricies faucibus justo. Nam aliquam auctor aliquet. Proin lacinia ante blandit tincidunt vestibulum. Vivamus lobortis dolor justo, sed lacinia enim commodo in. Sed eleifend, mauris eu mollis tincidunt, quam libero vulputate lorem, sed lacinia felis libero vel arcu. Mauris porttitor tincidunt dignissim. Nam ante metus, dapibus eu molestie ut, viverra commodo augue. Vestibulumsque cursus convallis diam, sit amet dictum felis efficitur eget. Se"}
                />
                <Card
                image={card2}
                heading={"Five Laws of Digital Literacy"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in aliquet mi, ultricies faucibus justo. Nam aliquam auctor aliquet. Proin lacinia ante blandit tincidunt vestibulum. Vivamus lobortis dolor justo, sed lacinia enim commodo in. Sed eleifend, mauris eu mollis tincidunt, quam libero vulputate lorem, sed lacinia felis libero vel arcu. Mauris porttitor tincidunt dignissim. Nam ante metus, dapibus eu molestie ut, viverra commodo augue. Vestibulumsque cursus convallis diam, sit amet dictum felis efficitur eget. Se"}
                />
                <Card
                image={card3}
                heading={"Digital Competencies and Skills"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in aliquet mi, ultricies faucibus justo. Nam aliquam auctor aliquet. Proin lacinia ante blandit tincidunt vestibulum. Vivamus lobortis dolor justo, sed lacinia enim commodo in. Sed eleifend, mauris eu mollis tincidunt, quam libero vulputate lorem, sed lacinia felis libero vel arcu. Mauris porttitor tincidunt dignissim. Nam ante metus, dapibus eu molestie ut, viverra commodo augue. Vestibulumsque cursus convallis diam, sit amet dictum felis efficitur eget. Se"}
                />
            </div>
        </div>
    )
}

export default Resources;