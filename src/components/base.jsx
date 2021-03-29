import React, { Component } from "react";

import Header from "./header";
import Home from "./home";
import Form from "./form";
import ModalForm from "./common/modalForm";
import ModalSlide from "./common/modalSlide";

import { getProvinces } from "../services/fakeProvinceService";
import { getNations } from "../services/fakeNationsService";
import { getImages } from "../services/fakeImagesService";

class Base extends Component {
  state = {
    showForm: false,
    formData: {},
    showModalForm: false,
    images: [],
    showModalSlide: false,
    currentSlide: 0,
    provinces: [],
    nations: [],
  };

  componentWillMount() {
    const provinces = [...getProvinces()];
    const nations = [...getNations()];
    const images = [...getImages()];

    this.setState({ provinces, nations, images });
  }

  //=====FORM=====//

  changeShowHome = () => {
    this.setState({ showForm: false });
  };

  changeShowForm = () => {
    this.setState({ showForm: true });
  };

  //=====MODAL FORM====//

  openModalForm = (data) => {
    this.setState({ formData: data, showModalForm: true });
  };

  handleCloseModalForm = () => {
    this.setState({ showModalForm: false });
    this.changeShowHome();
  };

  //=====MODAL SLIDE====//

  openModalSlide = (data) => {
    this.setState({ currentSlide: data, showModalSlide: true });
  };

  handleCloseModalSlide = () => {
    this.setState({ showModalSlide: false });
  };

  render() {
    const {
      showForm,
      formData,
      showModalForm,
      showModalSlide,
      currentSlide,
      images,
      provinces,
      nations,
    } = this.state;

    return (
      <React.Fragment>
        <ModalForm
          show={showModalForm}
          close={this.handleCloseModalForm}
          formData={formData}
        />
        <ModalSlide
          show={showModalSlide}
          close={this.handleCloseModalSlide}
          slides={images}
          currentSlide={currentSlide}
        />
        <Header
          showForm={this.changeShowForm}
          showHome={this.changeShowHome}
        ></Header>
        {!showForm && (
          <Home images={images} openModal={this.openModalSlide}></Home>
        )}
        {showForm && (
          <Form
            provinces={provinces}
            nations={nations}
            showModal={this.openModalForm}
          ></Form>
        )}
      </React.Fragment>
    );
  }
}

export default Base;
