import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
      /* Tambahkan state "content" dan "hasContentError" */
      content: '',
      hasContentError: false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  /* Deklarasikan method handleContentChange */
  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = <p className="contact-message-error">Masukkan alamat email Anda</p>;
    }

    /* Deklarasikan variable contentErrorText */
    let contentErrorText;

    /* Buat statement if dengan hasContentError sebagai kondisi */
    if (this.state.hasContentError) {
      contentErrorText = <p className="contact-message-error">Masukkan pesan Anda</p>;
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = <div className="contact-submit-message">Pesan Terkirim</div>;
    } else {
      contactForm = (
        <form
          onSubmit={() => {
            this.handleSubmit();
          }}>
          <p>Alamat Email (wajib diisi)</p>
          <input
            value={this.state.email}
            onChange={(event) => {
              this.handleEmailChange(event);
            }}
          />
          {emailErrorText}
          <p>Pesan (wajib diisi)</p>
          {/* Tambahkan nilai dan event onChange */}
          <textarea
            value={this.state.content}
            onChange={(event) => {
              this.handleContentChange(event);
            }}
          />
          {/* Tampilkan contentErrorText */}
          {contentErrorText}
          <input type="submit" value="Kirim" />
        </form>
      );
    }

    return <div className="contact-form">{contactForm}</div>;
  }
}

export default ContactForm;
