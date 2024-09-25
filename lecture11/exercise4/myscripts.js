//create variable header
const Header=() => {
    return (
        <header className="header">
        <h1>Buat Header Menggunakan JSX</h1>
        <p>Tutorial JSX Sederhana</p>
        </header>
    );
};

const Table= () => {
    return(
        <table border="1" cellPadding="10" style={{width: "100%", textAlign: "center"}}>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Gender</th>
                    <th>Jurusan</th>
                    <th>Whatsapp</th>
                    <th>Alamat</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        
                            <td>Nataniel</td>
                            <td>Laki-laki</td>
                            <td>Informatika</td>
                            <td>0845332</td>
                            <td>Crystal</td>


                    </tr>
                    <tr>
                        
                            <td>Adam</td>
                            <td>Laki-laki</td>
                            <td>Informatika</td>
                            <td>9874975</td>
                            <td>Mokupa</td>


                    </tr>
                    <tr>
                        
                            <td>Daniel</td>
                            <td>Laki-laki</td>
                            <td>Informatika</td>
                            <td>987524</td>
                            <td>Crystal</td>


                    </tr>
                    <tr>
                        
                            <td>Venal</td>
                            <td>Laki-laki</td>
                            <td>informatika</td>
                            <td>98458945</td>
                            <td>Crystal</td>


                    </tr>
                    <tr>
                        
                            <td>Edgar</td>
                            <td>Laki-laki</td>
                            <td>Filsafat</td>
                            <td>87797954725</td>
                            <td>Crystal</td>


                    </tr>
                         
            </tbody>
        </table>
    );
};
    

        
const App = () => {
    return (
        <div>
            <Header />
            <Table />
        </div>
    );
};

//render elemen ke DOM
ReactDOM.render(<App />, document.getElementById('app'));