import React from "react";
import '../style.scss';
import cause from '../../img/cause.svg';
import recovered from '../../img/recovered.svg';
import death from '../../img/death.svg';
import New from '../../img/new.svg';
import {Preloader} from 'react-lite-ui';
import {fetchInfo} from "../../store/actions/mainAction";
import {connect} from "react-redux";

class SecondSection extends React.Component {
    componentDidMount() {
        this.props.fetchInformation('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php')
    }
    render() {
        return (
            <div className='container-fluid secondSectionWrapper' id='stats'>
                <div className="jumbotron jumbotron-fluid">
                    {
                        this.props.loading ? <Preloader
                            size='small'
                            color='danger'
                            style={{margin: 'auto'}}
                        /> : <div className="container">
                            <div className='date'>
                                <h1>
                                    {this.props.info.statistic_taken_at}
                                </h1>
                            </div>
                            <div className="otherP row">
                                <div className='col-sm-12 col-md-2 col-lg-2'>
                                    <img src={cause} alt=""/>
                                    <h5>total cases: <strong>{this.props.info.total_cases}</strong></h5>
                                </div>
                                <div className='col-sm-12 col-md-2 col-lg-2'>
                                    <img src={death} alt=""/>
                                    <h5>total deaths: <strong>{this.props.info.total_deaths}</strong></h5>
                                </div>
                                <div className='col-sm-12 col-md-2 col-lg-2'>
                                    <img src={recovered} alt=""/>
                                    <h5>total recovered: <strong>{this.props.info.total_recovered}</strong></h5>
                                </div>
                                <div className='col-sm-12 col-md-2 col-lg-2'>
                                    <img src={New} alt=""/>
                                    <h5>today cases: <strong>{this.props.info.new_cases}</strong></h5>
                                </div>
                                <div className='col-sm-12 col-md-2 col-lg-2'>
                                    <img src={New} alt=""/>
                                    <h5>today deaths: <strong>{this.props.info.new_deaths}</strong></h5>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        loading: state.loading,
        info: state.info,
        error: state.error
    }
}

function MapDispatchToProps(dispatch) {
    return {
        fetchInformation: (url) => dispatch(fetchInfo(url))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(SecondSection)