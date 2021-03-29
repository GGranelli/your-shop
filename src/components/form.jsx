import React, { Component } from "react";
import Joi from "joi-browser";
import formImg from "../img/formImg.png";
import { isMobile } from "react-device-detect";

class Form extends Component {
  state = {
    data: {
      nome: "",
      cognome: "",
      email: "",
      indirizzo: "",
      citta: "",
      provincia: "",
      nazione: "",
      privacy: "",
    },
    errors: {},
  };

  schema = {
    nome: Joi.string().required(),
    cognome: Joi.string().required(),
    email: Joi.string().email().required(),
    indirizzo: Joi.string().required(),
    citta: Joi.string().required(),
    provincia: Joi.string().required(),
    nazione: Joi.string().required(),
    privacy: Joi.boolean().required().invalid(false),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    if (input.id === "privacy") data[input.name] = input.checked;

    this.setState({ data, errors });
  };

  renderInput = (name, label) => {
    return (
      <React.Fragment>
        <div className="label-input">
          <label className="label-form" id={name}>
            {label}
          </label>
          <input
            onChange={this.handleChange}
            name={name}
            id={name}
            className={"input-form"}
          />
        </div>
        {this.state.errors[name] && (
          <div className="alert alert-danger">{this.state.errors[name]}</div>
        )}
      </React.Fragment>
    );
  };

  renderSelect = (name, label, options) => {
    return (
      <React.Fragment>
        <div className="label-input">
          <label className="label-form" id={name}>
            {label}
          </label>

          <select
            onChange={this.handleChange}
            name={name}
            id={name}
            className={"select-form"}
          >
            <option value="" />
            {options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        {this.state.errors[name] && (
          <div className="alert alert-danger">{this.state.errors[name]}</div>
        )}
      </React.Fragment>
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      alert(errors);
      return;
    }

    this.doSubmit();
  };

  doSubmit = () => {
    this.props.showModal(this.state.data);
  };

  render() {
    return (
      <div className={!isMobile ? "form-body" : "form-body-mobile"}>
        <div className={!isMobile ? "div-side" : "div-side-mobile"}>
          <span
            className={!isMobile ? "span-text-form" : "span-text-form-mobile"}
          >
            Compila il form per richiedere maggiori informazioni
          </span>
          {!isMobile && (
            <div className="div-form-img">
              <img id="form-img" alt="form-img" src={formImg} />
            </div>
          )}
        </div>

        <div className={!isMobile ? "div-form" : "div-form-mobile"}>
          <form onSubmit={this.handleSubmit} className="form-contact-us">
            {this.renderInput("nome", "nome")}
            {this.renderInput("cognome", "cognome")}
            {this.renderInput("email", "e-mail")}
            {this.renderInput("indirizzo", "indirizzo")}
            {this.renderInput("citta", "città")}
            {this.renderSelect("provincia", "provincia", this.props.provinces)}
            {this.renderSelect("nazione", "nazione", this.props.nations)}
            <div className="div-checkbox">
              <input
                onChange={this.handleChange}
                type="checkbox"
                name="privacy"
                id="privacy"
              />{" "}
              <span>Accetto la Privacy Policy</span>
            </div>

            <button
              disabled={this.validate()}
              id="send-form-button"
              className="btn btn-primary"
            >
              Invia
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
