<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sommerhus udlejes</title>
    <link rel="stylesheet" type="text/css" media="screen" href="./resources/styling/main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./resources/styling/grid.css" />
    <link href="https://fonts.googleapis.com/css?family=Mukta:400,700|Noto+Serif:400,700" rel="stylesheet">     
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
    <div class="wrapper">
        <div class="grid-setup-front"> 
            <div class="grid-container-header">
                <header>
                    <div>
                        <p class="logo">Sommerhuset</p>
                    </div>
                    <nav>
                        <a href="index.php">Forside</a>
                        <a href="#">Registrer</a>
                        <a href="#">Området</a>
                    </nav>
                </header>                
            </div>
            <!-- TO-DO: box-info skal omdøbes til grid-column-left -->
            <div class="grid-front-left">
                <div>
                    <h1>Kort om huset</h1>
                    <p>4 værelser / 77 km2<br>
                    3 sovepladser med plads til 6 voksne<br>
                    Huset har antenne-TV og internet<br>
                    5 minutters gang til nærmeste strand<br>
                    10 minutters gang til nærmeste købmand</p>
                    <a href="#">Læs mere om huset og området</a>
                </div>
                <div class="box-calculator">
                    <form name="form-calculator">
                        <h2>Pris for lån af huset</h2>
                        <h4>Antal dage for ophold</h4>
                        <table id="price-overview">
                            <tr>
                                <td>Lån per dag:</td>
                                <td id="base-price-per-day" class="align-right">0</td>
                            </tr>
                            <tr>
                                <td>Ca. forbrug per dag:</td>
                                <td id="expenditure-per-day" class="align-right">0</td>
                            </tr>
                        </table>
                        <select name="number-of-days" id="number-of-days" class="form-element">
                        </select>
                        <h4>Medbringer I selv sengetøj & håndklæder?</h4>
                        <table>
                            <tr>
                                <td>Lån & vask af sengetøj & håndklæder:</td>
                                <td id="laundry-fee" class="align-right">0</td>
                            </tr>
                        </table>
                        <select name="laundry" id="laundry" class="form-element">
                            <option value="no">Nej</option>
                            <option value="yes">Ja</option>
                        </select>
                        <input type="button" id="calculate" class="btn" name="calculate" value="Beregn Pris">
                        <table id="table-price">
                            <tr>
                                <td>Pris for lån af hus</td>
                                <td id="price" class="align-right">0 kr.</td>
                            </tr>
                        </table>
                    </form>
                    <script src="./resources/scripts/calculator.js" type="text/javascript"></script>
                </div>
            </div>
            <div id="main-content" class="grid-front-main">
            </div>
            <!-- TO-DO: loc-box skal omdøbes, så div-en følger grid'ets naming-convention -->
            <div id="#widget-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60255.2131679809!2d11.576845394048405!3d55.858367719859636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464d8a3b01c6b26d%3A0x84f6188dc91c24c5!2zTMOmcmtlbG9kZGVuLCA0NTAwIE55a8O4YmluZyBTasOmbGxhbmQ!5e0!3m2!1sda!2sdk!4v1537466531109" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
            <!-- TO-DO: loc-info skal omdøbes, så div-en følger grid'ets naming-convention -->
            <div id="widget-weather" class="grid-item">

            </div>
        </div>
        <div class="grid-setup-content">
            <div id="expenditures-form" class="grid-content-left grid-item">
                <h2>Registrer forbrug</h2>
                <?php
                    include("./includes/registration-form.php");
                ?>
                <script src="./resources/scripts/expenditure-log.js" type="text/javascript"></script>
            </div>
            <div id="expenditures-log" class="grid-item">
                <h1>Oversigt over forbrug</h1>
                <?php
                    include("./includes/database-connection.php");                    
                    if (mysqli_connect_errno($conn))
                    {
                        echo "Failed to connect to MySQL: " . mysqli_connect_error();
                    }

                    $sqlQ = "SELECT * FROM `expenditure_log` ORDER BY date_of_arrival DESC";
                    $result = $conn->query($sqlQ);
                    
                    echo "<table border='0'>
                    <tr>
                        <th>id</th>
                        <th>Bruger</th>
                        <th>Ankomst</th>
                        <th>Dage</th>
                        <th>Registrering start</th>
                        <th>Registrering slut</th>
                    </tr>";
                    
                    while($row = mysqli_fetch_array($result))
                    {
                        echo "<tr>";
                        echo "<td>" . $row['registration_id'] . "</td>";
                        echo "<td>" . $row['user'] . "</td>";
                        echo "<td>" . $row['date_of_arrival'] . "</td>";
                        echo "<td>" . $row['number_of_days'] . "</td>";
                        echo "<td>" . $row['electricity_start'] . "</td>";
                        echo "<td>" . $row['electricity_end'] . "</td>";
                        echo "</tr>";
                    }   
                    echo "</table>";
                    mysqli_close($conn);
                ?>
            </div>
        </div>
        <footer>
            <!-- TO-DO: Add styling and content to footer-->       
        </footer>
    </div>
</body>
</html>