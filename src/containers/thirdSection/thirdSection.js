import React from "react";
import '../style.scss';
import {fetchInfo} from "../../store/actions/mainAction";
import {connect} from "react-redux";
import {Preloader} from "react-lite-ui";
import cause from '../../img/cause.svg';
import recovered from '../../img/recovered.svg';
import death from '../../img/death.svg';
import New from '../../img/new.svg';
import country from '../../img/country.svg'
import risk from '../../img/risk.svg'
import live from '../../img/live.svg'
import population from '../../img/population.svg'
import Search from "../search/search";


class ThirdSection extends React.Component {
    componentDidMount() {
        this.props.fetchInformation('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php')
    }
    render() {
        return (
            <div className="container-fluid thirdSectionWrapper">
                <Search/>
                <div className="accordion" id="accordionExample">
                    {this.props.loading ? <div className='loader'>
                            <Preloader
                                className='loader'
                                size='small'
                                color='danger'
                                style={{margin: 'auto'}}
                            />
                    </div>
                    :
                        this.props.allInfo.map((one, index) => {
                            return (
                                <div className="card" id={one.country_name} key={index}>
                                    <div className="card-header" id={`headingOne${index}`}>
                                        <h2 className="mb-0">
                                            <div className="collapsed wrapperCountry" style={{cursor: 'pointer'}} data-toggle="collapse"
                                                 data-target={`#collapseOne${index + 1}`} aria-expanded="true" aria-controls={`collapseOne${index + 1}`}>
                                                <img src={country} alt=""/>
                                                <h2>{one.country_name}</h2>
                                            </div>
                                        </h2>
                                    </div>

                                    <div id={`collapseOne${index + 1}`} className="collapse" aria-labelledby={`headingOne${index}`}
                                         data-parent="#accordionExample">
                                        <div className="card-body row">
                                            <div className='col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4'>
                                                <img src={cause} alt=""/>
                                                <h5>cases: {one.cases}</h5>
                                            </div>
                                            <div className='col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4'>
                                                <img src={death} alt=""/>
                                                <h5>deaths: {one.deaths}</h5>
                                            </div>
                                            <div className='col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4'>
                                                <img src={recovered} alt=""/>
                                                <h5>recovered: {one.total_recovered}</h5>
                                            </div>
                                            <div className='col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4'>
                                                <img src={New} alt=""/>
                                                <h5>today deaths: {one.new_deaths}</h5>
                                            </div>
                                            <div className='col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4'>
                                                <img src={New} alt=""/>
                                                <h5>today cases: {one.new_cases}</h5>
                                            </div>
                                            <div className='col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4'>
                                                <img src={risk} alt=""/>
                                                <h5>serious critical: {one.serious_critical}</h5>
                                            </div>
                                            <div className='col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4'>
                                                <img src={live} alt=""/>
                                                <h5>active cases: {one.active_cases}</h5>
                                            </div>
                                            <div className='col-12 col-md-4 col-lg-4 col-sm-4 col-xl-4'>
                                                <img src={population} alt=""/>
                                                <h5>total cases per 1m population: {one.total_cases_per_1m_population}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        loading: state.loading,
        error: state.error,
        allInfo: state.allInfo
    }
}

function MapDispatchToProps(dispatch) {
    return {
        fetchInformation: (url) => dispatch(fetchInfo(url))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ThirdSection)