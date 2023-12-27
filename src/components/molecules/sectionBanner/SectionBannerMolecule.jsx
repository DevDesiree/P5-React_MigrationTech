import "./sectionBannerMolecule.css"

const SectionBannerMolecule = () => {
  return (
    <section id="banner">
            <div class="banner_icons">

                <div class="green_diamond">
                    <img src="./assets/img/decorative-green-diamond.svg"></img>
                </div>
                <div class="yellow_circle">
                    <img src="./assets/img/decorative-yellow-circle.svg"></img>
                </div>
            </div>
            <h1>
                Mobile App Landing Page
            </h1>

            <div class="banner_description">
                <p>
                    Start focusing on your goals and get more things done with Sync mobile application. It's the
                    first
                    app to harness the power of social connections to help you stay focused and get organized
                </p>
                <div class="banner_buttons">
                    <a href="https://femcoders.factoriaf5.org/" target="_blank"><button type="button"><i class="fa-brands fa-apple"></i>DOWNLOAD</button></a>
                    <a href="https://www.somosf5.org/" target="_blank"><button type="button"><i class="fa-brands fa-google-play"></i>DOWNLOAD</button></a>
                </div>
            </div>

            <div class="banner_circle_white_right">
                <img class="circle_white" src="./assets/img/decorative-white-circle.svg"></img>
            </div>


            <div class="banner_circle_white_left">
                <img class="circle_white" src="./assets/img/decorative-white-circle.svg"></img>
            </div>

            <div class="banner_circle_blue">
                <img src="./assets/img/decorative-blue-circle.svg" class="circle_blue"></img>
            </div>


            <div class="banner_container_phone">
                <img src="./assets/img/header-iphone.png" alt="phone image"></img>
            </div>


            <section id="banner_container_circle_cards">
                <div class="container_circle_cards">
                    <div class="circle_cards" id="circle_goals">
                        <i class="fa-solid fa-users fa-2xl"></i>
                    </div>
                    <span>Identify Goals</span>
                </div>

                <div class="container_circle_cards">
                    <div class="circle_cards" id="circle_analysis">
                        <i class="fa-solid fa-code fa-2xl"></i>
                    </div>
                    <span>Situation Analysis</span>
                </div>


                <div class="container_circle_cards">
                    <div class="circle_cards" id="circle_settings">
                        <i class="fa-solid fa-gear fa-2xl"></i>
                    </div>
                    <span>Tasks Settings</span>
                </div>

                <div class="container_circle_cards">
                    <div class="circle_cards" id="circle_interaction">
                        <i class="fa-solid fa-comments fa-2xl"></i>
                    </div>
                    <span>Social Interaction</span>
                </div>

                <div class="container_circle_cards">
                    <div class="circle_cards" id="things_done">
                        <i class="fa-solid fa-rocket fa-2xl"></i>
                    </div>
                    <span>Get Things Done</span>
                </div>
            </section>

        </section>
  )
}

export default SectionBannerMolecule