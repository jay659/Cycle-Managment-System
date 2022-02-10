import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row p-lr-50">
          <div className="col-12 text-center ">
            <h2 className="title-underline mb-4">
              About<span className="t-orange">&nbsp;Us</span>
            </h2>
          </div>
        </div>
        <div className="about_container d-flex">
          <div className="row">
            <div className="col-lg-8 col-12">
              <p className="p-5 text bolder">
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quaerat debitis, itaque laboriosam rerum porro! Labore
                placeat soluta iste molestiae, esse maiores illum! Quos minima
                nulla commodi soluta sequi deleniti tempora, esse excepturi
                tenetur repudiandae earum totam accusamus est incidunt suscipit
                sint expedita praesentium animi eos autem. Id voluptate nulla
                ratione error, atque corporis non consectetur, maxime incidunt
                minima autem omnis reprehenderit fuga quibusdam voluptas,
                debitis minus aspernatur nisi assumenda veritatis asperiores.
                Nobis officiis ex at est ad laboriosam debitis neque. Doloribus
                quidem ipsa quam quas alias pariatur architecto quod deserunt in
                quae voluptates fugiat debitis accusamus quasi, impedit illum? */}
                Bicycle E-Renting System is a web-application to book cycle on
                rent. It provides various services like book cycle, take cycle,
                use cycle and return cycle etc. Our salient feature is to take
                booked cycle on hourly basis. People can book it from remote
                areas. In this web application user easily register and book any
                cycle. Nowadays, many people become health conscious. Hence,
                this idea can brings more awareness among people. They can take
                care of their health in current bottleneck era. As it has more
                benefits for visitors or outsiders, they can not aware about
                distinct places of city. So through this app they can book it
                immediately. So, we develop an idea of Bicycle E-Renting System.
                In Bicycle E-Renting System we are managing of number of cycles
                available. Our main goal is to provide services to Users when
                they need cycles instantly. Also, in our web application we
                provide tracking system to users by notify them by sending
                messages. So, that User get info about their time limits. Also,
                user set their daily schedule as per their requirement.
              </p>
            </div>
            <div className="col-lg-4 col-12">
              <div className="image_about_container text-center p-5">
                <img
                  src="https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg"
                  alt="name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
