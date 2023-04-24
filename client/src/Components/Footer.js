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
            <MDBFooter bgColor='primary' className='text-center text-lg-start text-muted'>
                <MDBContainer className='p-4'>
                    <MDBRow>
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase' class="text-white">Библиотека</h5>

                            <p class="text-white">
                                Сервис «Библиотека» — это онлайн-полка, где собраны все книги городских библиотек.
                                Найдите нужную, посмотрите свободна ли она и забронируйте её прямо из дома.
                                Мы оповестим, когда книгу можно будет забрать, и вовремя напомним, что её пора вернуть.
                            </p>
                        </MDBCol>

                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase' class="text-white">Контакты:</h5>

                            <p class="text-white">
                                - улица Первомайская 22, "Библиотека имени Константика Симонова", 2 этаж
                            </p>
                            <p className="text-white">
                                - 8(917)-837-28-48
                            </p>
                            <p className="text-white">
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