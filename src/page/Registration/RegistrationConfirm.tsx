import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "src/components/Input";
import { useFetch } from "src/util/CustomHook";
interface RegistrationConfirmProps {
    email: string,
    code: string,
}
const RegistrationConfirm = () => {
    const [cookie, setCookie] = useCookies(['user']);
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationConfirmProps>();

    const onSubmit: SubmitHandler<RegistrationConfirmProps> = (data) => {
        console.log(data);

        async function init() {
            await useFetch.post("/api/auth/registrationConfirm", data).then(result => {
                alert(result.data)
                window.location.href = "/login"
            }).catch(errors => alert(errors.response.data.message))
        }
        init();
    };
    return (
        <>
            <div className="container-fluid bg-white" style={{ paddingBlock: "20px", height: "100vh" }}>
                <div className="row">
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 bg-white">
                        <form className="m-auto p-4 font-monospace text-dark py-5" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-center text-uppercase fw-bolder" style={{ fontFamily: 'courier, arial, helvetica' }}>Đăng ký</h1>
                            <hr />
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email:</label>
                                <Input type="email" name="email" id="email" className="form-control" register={register("email", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} />
                                <div className="text-danger mt-1">{errors.email?.message}</div>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example2">Mã xác minh: </label>
                                <Input type="text" name="OTP" id="OTP" className="form-control" register={register("code", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} />
                                <div className="text-danger mt-1">{errors.code?.message}</div>
                            </div>
                            {/* Submit button */}
                            <div className="row">
                                <button type="submit" className="btn btn-default border border-info rounded-3 btn-block mb-4">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ backgroundImage: `url(https://e1.pxfuel.com/desktop-wallpaper/782/567/desktop-wallpaper-laptop-repair-computer-shop-background.jpg)`, objectFit: "fill", backgroundRepeat: "no-repeat" }}></div>
                    <div className="col-md-1 col-lg-1"></div>
                </div>
            </div>
        </>
    )
}

export default RegistrationConfirm;