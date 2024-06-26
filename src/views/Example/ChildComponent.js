import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleClickDelete: ', job)
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional: ', check)
        return (

            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs?.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <> </><span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </>

        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;

//     return (

//         <>
//             <div><button>Show</button></div>
//             <div className="job-lists">
//                 {
//                     arrJobs?.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }

//                     })
//                 }

//             </div>
//             <div><button>Hide</button></div>
//         </>

//     )
// }

export default ChildComponent;