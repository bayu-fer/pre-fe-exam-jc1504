// Sorry kak cuman sampai add, saya udah otak atik malah fail :(
import React from "react";
import Axios from "axios";


class Home extends React.Component {
  state = {
    cartInfo: {
      nama: "",
      usia: "",
      pekerjaan: "",
    },
  };

  onChangeInput = (e) => {
    this.setState({
      cartInfo: {
        ...this.state.cartInfo,
        [e.target.id]: e.target.value,
      },
    });
    console.log(this.state.cartInfo);
  };

  clickRegister = () => {
    const { nama, usia, pekerjaan } = this.state.cartInfo;
    if (nama && usia && pekerjaan) {
      Axios.post(`http://localhost:2000/user`, {nama,usia,pekerjaan})
      .then((res)=>{
          console.log("res")
      })
      .catch((err)=>{
          console.log("err")
      })
    } else {
      alert("Fill in all the forms!");
    }
  };    

  render() {
    return (
      <div>
        <h1>SOAL 1</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <select className="form-control">
              <option>Filter By Pekerjaan</option>
            </select>
          </div>
        </div>
        <table className="table mb-4">
          <thead>
            <tr>
              <td>Nama</td>
              <td>Usia</td>
              <td>Pekerjaan</td>
              <td>Act</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="row">
          <div className="col-md-3">
            {" "}
            <input
              onChange={this.onChangeInput}
              type="text"
              className="form-control"
              placeholder="Nama"
              id="nama"
            />{" "}
          </div>
          <div className="col-md-3">
            {" "}
            <input
              onChange={this.onChangeInput}
              type="number"
              className="form-control"
              placeholder="Usia"
              id="usia"
            />{" "}
          </div>
          <div className="col-md-3">
            {" "}
            <input
              onChange={this.onChangeInput}
              type="text"
              className="form-control"
              placeholder="Pekerjaan"
              id="pekerjaan"
            />{" "}
          </div>
          <div className="col-md-3">
            {" "}
            <input
              type="button"
              className="form-control btn-info"
              value="add Data"
              id="addData"
              onClick={this.clickRegister}
            />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
