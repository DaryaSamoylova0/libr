import React, {Component} from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

class Footer extends Component {
    render() {
        return (
            <MDBFooter  className='text-center text-lg-start text-muted'>
                <MDBContainer className='p-4' >
                    <MDBRow >
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase' class="text-black">Библиотека</h5>

                            <p class="text-black">
                                Сервис «Библиотека» — это онлайн-полка, где собраны все книги городских библиотек.
                                Найдите нужную и положите ее в корзину.
                                Мы оповестим, когда книгу можно будет забрать, и вовремя напомним, что её пора вернуть.
                            </p>
                        </MDBCol>

                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase' class="text-black">Контакты:</h5>

                            <p class="text-black">
                                - улица Первомайская 22, "Библиотека имени Константика Симонова", 2 этаж
                            </p>
                            <p className="text-black">
                                - library@mail.ru
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgb(250,250,250)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://mdbootstrap.com/'>
                        "Библиотека"
                    </a>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;