import React, { Component } from 'react';

import './Home.css';

class Home extends Component {  
  render() {
    return (
        <div className="Home">
            <h1>This part of the website is still under construction</h1>
            <p>Please check back here in a later stage of development</p>

            <table>
              <tr>
                <th>Pair</th>
                <th>Bias</th>
                <th>Image</th>
                <th>Time</th>
                <th>Entry</th>
                <th>Exit</th>
                <th>SL Size</th>
                <th>TP Size</th>
                <th>RR</th>
                <th>Risk</th>
                <th>P/L</th>
              </tr>
              <tr>
                <td>EURUSD</td>
                <td>LONG</td>
                <td>https://www.tradingview.com/x/EUtcxOcg/</td>
                <td>8:28AM</td>
                <td>1.18589</td>
                <td>1.18959</td>
                <td>3.9 pips</td>
                <td>37 pips</td>
                <td>9.5RR</td>
                <td>1%</td>
                <td>+184.37</td>
              </tr>
              <tr>
                <td>EURUSD</td>
                <td>SHORT</td>
                <td>https://www.tradingview.com/x/xBhObR6t/</td>
                <td>2:34PM</td>
                <td>1.18589</td>
                <td>1.18998</td>
                <td>4 pips</td>
                <td>16 pips</td>
                <td>4RR</td>
                <td>1%</td>
                <td>-22.3</td>
              </tr>
              <tr>
                <td>GBPUSD</td>
                <td>LONG</td>
                <td>https://www.tradingview.com/x/1wXXt1Az/</td>
                <td>9:59AM</td>
                <td>1.28532</td>
                <td>1.28800</td>
                <td>8.7 pips</td>
                <td>26.8 pips</td>
                <td>1%</td>
                <td>3RR</td>
                <td>+54.09</td>
              </tr>
            </table>
        </div>
    );
  }
}

export default Home;
