import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import { AuthContext } from "../../Context/AuthContext";
import imgBottom from "../../Img/Chital.png"
import { 
    Container, 
    ContainerButton, 
    ContainerForm, 
    ContainerInput, 
    Form, 
    HeaderMain, 
    Main 
    } from "../../Components/container/style";
import { useNavigate } from "react-router-dom";


export interface ICustomers {
    name: string
    email: string
    phone: number
}

export default function Customers() {

    const navigate = useNavigate()

    const {
        onSubmitCustomers
    } = useContext(AuthContext)

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().email().required("Email obrigatório"),
        phone: yup.string()
    })

    const {
        register,
        handleSubmit,
    } = useForm<ICustomers>({
        resolver: yupResolver(formSchema)
    })

    return (
        <Main style={{
            backgroundImage: `url(${imgBottom})`
        }}>
            <Container>

                <HeaderMain>
                    <h2>Cadastro de clientes</h2>
                    <ContainerButton>
                        <button className="createContats" onClick={() => navigate("/contats")}>
                            <span>Contatos</span>
                        </button>
                    </ContainerButton>
                </HeaderMain>
                <ContainerForm>
                    <Form onSubmit={handleSubmit(onSubmitCustomers)}>

                        <ContainerInput>
                            <label htmlFor="name">Nome completo</label>
                            <input 
                                type="text" 
                                placeholder="Digite seu nome completo"
                                {...register("name")}
                                />
                        </ContainerInput>

                        <ContainerInput>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                placeholder="Digite seu email"
                                {...register("email")}
                                />
                        </ContainerInput>

                        <ContainerInput>
                            <label htmlFor="phone">Telefone</label>
                            <input 
                                type="text" 
                                placeholder="Digite seu telefone"
                                {...register("phone")}
                                />
                        </ContainerInput>
                        
                        <ContainerButton>
                            <button type="submit" className="register">
                                <span>
                                    Cadastrar
                                </span>
                            </button>
                        </ContainerButton>
                    </Form>
                </ContainerForm>
            </Container>
        </Main>
    )
}