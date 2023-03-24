import "./Home.css";
// importing bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <div style={{ height: "45vh" }} className="card bg-dark text-white ">
        <div className="row">
          <div className="col">
            <img
              classNameName="card-img  "
              style={{ width: "20vh" }}
              src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png"
              alt="Card image"
            />
            <h5 className="card-title">Akshay Singh</h5>
          </div>
          <div className="col">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates numquam autem minus natus fugiat et alias mollitia
              cumque! Enim, aliquid alias delectus a soluta expedita repudiandae
              illum, sed voluptas doloremque temporibus aperiam inventore, ab
              aspernatur! Fugiat libero facere repellat sed.
            </p>
          </div>
        </div>

        <div className="card-img-overlay "></div>
      </div>

      <div className="mt-3">
        <div className="row text-center">
          <div className="col-sm-12 col-md-6 col-lg-6  border rounded ">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col">
                <img
                  className="card-img-top w-25"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                  alt="Card image cap"
                />
              </div>
              <div className="col">
                <div class="card-body">
                  <h5 class="card-title">Angular</h5>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime repudiandae ducimus labore ab dolores illo tempora?
                  </p>
                  <button className="btn btn-dark">Read Docs</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 border rounded">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col">
                <img
                  className="card-img-top w-25"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="Card image cap"
                />
              </div>
              <div className="col">
                <div class="card-body">
                  <h5 class="card-title">React</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-dark">Read Docs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
