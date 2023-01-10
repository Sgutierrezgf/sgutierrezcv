import '../styles/pages/Experience.css'
const Experience = () => (
    <section className="Exp">
        <div className="WorkExp">
            <h1>Experience</h1>

            <table className='TableExp'>
                <tr className='TableExp-title'>
                    <th className='TableExp-title1'>Company</th>
                    <th className='TableExp-title2'>Year</th>
                    <th className='TableExp-title3'>Position</th>
                    {/* <th className='TableExp-title4'>Description</th> */}
                    <th className='TableExp-title5'>Technologies used</th>
                </tr>
                <tr className='TableExp-description'>
                    <td className='TableExp-description1'>JIKKOSOFT, Cali</td>
                    <td className='TableExp-description2'>SOFTWARE ENGINNER MID I</td>
                    <td className='TableExp-description3'>MARCH 2021 - AUGUST 2022</td>
                    {/* <td className='TableExp-description4'>Development and maintenance of a virtual tax collection application, focused on
                        the mayor's offices of the cities of colombia.</td> */}
                    <td className='TableExp-description5'>React js, Typescript , SASS, Node.</td>
                </tr>
                <tr className='TableExp-description'>
                    <td className='TableExp-description1'>SETI, Medellin</td>
                    <td className='TableExp-description2'>DATABASE TRAINING</td>
                    <td className='TableExp-description3'>SEPTEMBER 2019 - MARCH 2021</td>
                    {/* <td className='TableExp-description4'>Development, management and maintenance of the databases of a financial
                        company, performing the process of migrating local databases to virtual
                        databases.</td> */}
                    <td className='TableExp-description5'>Visual Studio, SQL Managment, Command console, Power
                        Automate, HTML</td>
                </tr>
            </table>
        </div>
    </section>
)

export default Experience;