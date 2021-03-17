import React, {Component} from "react"
import Master from "./assets/master-hog.png"
import BabyHog from "./BabyHog"
import offspring from "./db.js"

export default class MasterHog extends Component {
  constructor() {
    super()
    this.state = {
      eyeColor: "blue",
    }
  }

  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value,
    })
  }

  generateBabyHogs = (offspring) => {
    return offspring.map((babyHog) => (
      <BabyHog
        id={babyHog.id}
        name={babyHog.name}
        hobby={babyHog.hobby}
        eyeColor={this.state.eyeColor}
      ></BabyHog>
    ))
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          name="eyeColor"
          value="blue"
          onChange={this.changeEyeColor}
        />
        Blue<br></br>
        <input
          type="radio"
          name="eyeColor"
          value="sun"
          onChange={this.changeEyeColor}
        />
        Sun<br></br>
        <input
          type="radio"
          name="eyeColor"
          value="glowing"
          onChange={this.changeEyeColor}
        />
        Glowing<br></br>
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        <ul className="hoglist">{this.generateBabyHogs(offspring)}</ul>
      </div>
    )
  }
}
