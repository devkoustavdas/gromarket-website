import PropTypes from "prop-types"; 
const Comments = ({id}) => {
    return (
        <form className='mt-8'>
            <label htmlFor='comments' className='text-teal-400'>Share you thoughts on this with us.</label>
            <textarea id='comments' rows="2" placeholder='Type your Comments' className='mt-2 bg-slate-700 text-slate-300 px-3 w-full py-2 border-2 border-slate-400 rounded-md focus:outline-none focus:border-slate-200 resize-none'></textarea>
            <button type="submit" className='float-right p-3 rounded-md align-middle flex flex-row gap-2 bg-teal-600 text-slate-50'>Send <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg></button>
        </form>
    )
}
Comments.propTypes = {
    id: PropTypes.string.isRequired,
};
export default Comments;
