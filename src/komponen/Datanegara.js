//import React dan tabel
import React from 'react';
import MaterialTable from 'material-table';


//component
class Datanegara extends React.Component {
    constructor(props)  {
    super(props);
    this.tableRef = React.createRef();
    }

    state = {
        loading:false,
        stats: [],
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://corona.lmao.ninja/v3/covid-19/countries')
        .then(response => response.json())
        .then(res => {
            this.setState({ stats: res, loading: false }, () => console.log(res))
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
    
    return (
        <React.Fragment>
        <MaterialTable style={{marginLeft:'190px', marginRight:'190px'}}
            title="Data Perkembangan Kasus Covid-19 Negara"
            columns={[
                { title: 'Negara', field :'country'},
                { title: 'Total Positif', field :'cases'},
                { title: 'Total Meninggal', field :'deaths'},
                { title: 'Total Sembuh', field :'recovered'},
                ]}
            data={this.state.stats}

        actions={[
            {
                icon: 'refresh',
                tooltip: 'refresh',
                isFreeAction: true,
                onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
            },
        ]}

        options={{
            headerStyle: {
                backgroundColor: '#0F6177',
                color: '#FFFF'
            }
        }}
        />
        </React.Fragment>
    
       )
    }
}

export default Datanegara;