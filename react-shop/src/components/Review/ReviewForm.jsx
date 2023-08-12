import { useState } from "react"
import {useForm} from "react-hook-form"
import s from "./reviewForm.module.scss"
const ReviewForm = (props) => {
    const [reviewInfo, setReviewInfo] = useState({})
    const {form: errors, handleSubmit, register} = useForm()
    const onSubmit = (data) => {
        setReviewInfo({...data})
        console.log(reviewInfo)
        props.submitReview()
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className={s.reviews_container}>
            <input {...register("name", {required: true})} type="text" placeholder="Your Name"/>
            <input {...register("email", {required: true})} type="email" placeholder="Your Email"/>
            <textarea {...register("review", {required: true})} cols="30" rows="10">Your Review</textarea>
            <button onClick={props.cancelReview} className={s.reviews_container_btnCancel}>Cancel</button>
            <button className={s.reviews_container_btnSubmit} type="submit">Submit</button>
        </form>
    )
}

export default ReviewForm