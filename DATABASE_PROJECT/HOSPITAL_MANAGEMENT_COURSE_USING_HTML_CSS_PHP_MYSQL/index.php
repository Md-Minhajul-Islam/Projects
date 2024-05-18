<?php
    include 'header.php';
?>
<div id="main-content">
    
    <?php
        include 'config.php';
        $sql = "SELECT *
                FROM PATIENTS_DATA";
        $result = mysqli_query($conn, $sql) or die("Query Unsuccessful");

        if(mysqli_num_rows($result) > 0) {
    ?>
        <table cellpadding = "7px">
            <h2>PATIENTS DATA</h2>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>CONTACT</th>
                <th>ADDRESS</th>
            </thead>
            <tbody>
                <?php
                    while($row = mysqli_fetch_assoc($result)){
                ?>
                <tr>
                    <td><?php echo $row['ID'];?></td>
                    <td><?php echo $row['NAME'];?></td>
                    <td><?php echo $row['AGE'];?></td>
                    <td><?php echo $row['GENDER'];?></td>
                    <td><?php echo $row['CONTACT'];?></td>
                    <td><?php echo $row['ADDRESS'];?></td>
                </tr>
                <?php } ?>
            </tbody>
            <?php }
            else {
                echo "<h2> No Record Found </h2>";
            }
        ?>



    <?php
        $sql = "SELECT *
                FROM DOCTORS_DATA";
        $result = mysqli_query($conn, $sql) or die("Query Unsuccessful");

        if(mysqli_num_rows($result) > 0) {
    ?>
        <table cellpadding = "7px">
            <h2>DOCTORS DATA</h2>
            <thead>
                <th>ID</th>
                <th>SPECIALITY</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>CONTACT</th>
            </thead>
            <tbody>
                <?php
                    while($row = mysqli_fetch_assoc($result)){
                ?>
                <tr>
                    <td><?php echo $row['ID'];?></td>
                    <td><?php echo $row['SPECIALITY'];?></td>
                    <td><?php echo $row['NAME'];?></td>
                    <td><?php echo $row['AGE'];?></td>
                    <td><?php echo $row['GENDER'];?></td>
                    <td><?php echo $row['CONTACT'];?></td>
                </tr>
                <?php } ?>
            </tbody>
            <?php }
            else {
                echo "<h2> No Record Found </h2>";
            }
        ?>


        <?php
        $sql = "SELECT *
                FROM APPOINTED";
        $result = mysqli_query($conn, $sql) or die("Query Unsuccessful");

        if(mysqli_num_rows($result) > 0) {
        ?>
        <table cellpadding = "7px">
            <h2>APPOINTED</h2>
            <thead>
                <th>PATIENT ID</th>
                <th>DOCTOR ID</th>
                <th>DISEASE</th>
            </thead>
            <tbody>
                <?php
                    while($row = mysqli_fetch_assoc($result)){
                ?>
                <tr>
                    <td><?php echo $row['PATIENT_ID'];?></td>
                    <td><?php echo $row['DOCTOR_ID'];?></td>
                    <td><?php echo $row['DISEASE'];?></td>
                </tr>
                <?php } ?>
            </tbody>
            <?php }
            else {
                echo "<h2> No Record Found </h2>";
            }
        ?>



        <?php
        $sql = "SELECT *
                FROM ALLOCATION";
        $result = mysqli_query($conn, $sql) or die("Query Unsuccessful");

        if(mysqli_num_rows($result) > 0) {
        ?>
        <table cellpadding = "7px">
            <h2>ALLOCATION</h2>
            <thead>
                <th>PATIENT ID</th>
                <th>ROOM NO</th>
                <th>CHECK IN</th>
                <th>CHECK OUT</th>
            </thead>
            <tbody>
                <?php
                    while($row = mysqli_fetch_assoc($result)){
                ?>
                <tr>
                    <td><?php echo $row['PATIENT_ID'];?></td>
                    <td><?php echo $row['ROOM_NO'];?></td>
                    <td><?php echo $row['CHECK_IN'];?></td>
                    <td><?php echo $row['CHECK_OUT'];?></td>
                </tr>
                <?php } ?>
            </tbody>
            <?php }
            else {
                echo "<h2> No Record Found </h2>";
            }
        ?>



        <?php
        $sql = "SELECT *
                FROM ROOMS";
        $result = mysqli_query($conn, $sql) or die("Query Unsuccessful");

        if(mysqli_num_rows($result) > 0) {
        ?>
        <table cellpadding = "7px">
            <h2>ROOMS</h2>
            <thead>
                <th>ROOM NO</th>
                <th>STATUS</th>
            </thead>
            <tbody>
                <?php
                    while($row = mysqli_fetch_assoc($result)){
                ?>
                <tr>
                    <td><?php echo $row['ROOM_NO'];?></td>
                    <td><?php echo $row['STATE'];?></td>
                </tr>
                <?php } ?>
            </tbody>
            <?php }
            else {
                echo "<h2> No Record Found </h2>";
            }
            mysqli_close($conn);
        ?>



    </div>
</div>
</body>
</html>

        
