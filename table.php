<head>
<?

function getResource( $num )
{
  if( $num == 1 )
    return "aluminum";
  else if( $num == 2 )
	return "cattle";
  else if( $num == 3 )
	return "coal";
  else if( $num == 4 )
	return "fish";
  else if( $num == 5 )
	return "fur";
  else if( $num == 6 )
	return "gems";
  else if( $num == 7 )
	return "gold";
  else if( $num == 8 )
	return "iron";
  else if( $num == 9 )
	return "lead";
  else if( $num == 10 )
	return "lumber";
  else if( $num == 11 )
	return "marble";
  else if( $num == 12 )
	return "oil";
  else if( $num == 13 )
	return "pigs";
  else if( $num == 14 )
	return "rubber";
  else if( $num == 15 )
	return "silver";
  else if( $num == 16 )
	return "spices";
  else if( $num == 17 )
	return "sugar";
  else if( $num == 18 )
	return "uranium";
  else if( $num == 19 )
	return "water";
  else if( $num == 20 )
	return "wheat";
  else if( $num == 21 )
	return "wine";
}

function getNumber( $res )
{
  if( $res == "aluminum" )
    return 1;
  else if( $res == "cattle" )
	return 2;
  else if( $res == "coal" )
	return 3;
  else if( $res == "fish" )
	return 4;
  else if( $res == "fur" )
	return 5;
  else if( $res == "gems" )
	return 6;
  else if( $res == "gold" )
	return 7;
  else if( $res == "iron" )
	return 8;
  else if( $res == "lead" )
	return 9;
  else if( $res == "lumber" )
	return 10;
  else if( $res == "marble" )
	return 11;
  else if( $res == "oil" )
	return 12;
  else if( $res == "pigs" )
	return 13;
  else if( $res == "rubber" )
	return 14;
  else if( $res == "silver" )
	return 15;
  else if( $res == "spices" )
	return 16;
  else if( $res == "sugar" )
	return 17;
  else if( $res == "uranium" )
	return 18;
  else if( $res == "water" )
	return 19;
  else if( $res == "wheat" )
	return 20;
  else if( $res == "wine" )
	return 21;
}

function outputUser( $nation, $ruler, $link, $res1, $res2, $uranium )
{
  echo'<tr>';
  echo'<th>';
  echo'<a href=http://cybernations.net/nation_drill_display.asp?Nation_ID=$link>$rule of $nation</a>';
  echo'</th>';
  echo'<th>';
  echo'<img src=$res1.gif>';
  echo'</th>';
  echo'<th>';
  echo'<img src=$res2.gif>';
  echo'</th>';
  echo'<tr>';
}

$action = $_GET['act'];

echo '</head>';
echo '<body>';
echo '  <table>';

if( $action == "signup" )
{
  echo '<form action="trade.php?act=submit" method="post">';
  echo 'Nation Name: <input type="text" name="nation"><br>';
  echo 'Ruler Name: <input type="text" name="ruler"><br>';
  echo 'Nation Link: <input type="text" name="link"><br>';
  echo 'Resource #1:
  <select name="resource1">
  <option value="1">Aluminum</option>
  <option value="2">Cattle</option>
  <option value="3">Coal</option>
  <option value="4">Fish</option>
  <option value="5">Furs</option>
  <option value="6">Gems</option>
  <option value="7">Gold</option>
  <option value="8">Iron</option>
  <option value="9">Lead</option>
  <option value="10">Lumber</option>
  <option value="11">Marble</option>
  <option value="12">Oil</option>
  <option value="13">Pigs</option>
  <option value="14">Rubber</option>
  <option value="15">Silver</option>
  <option value="16">Spices</option>
  <option value="17">Sugar</option>
  <option value="18">Uranium</option>
  <option value="19">Water</option>
  <option value="20">Wheat</option>
  <option value="21">Wine</option>
  </select>
  <br>';
  echo 'Resource #2:
  <select name="resource1">
  <option value="1">Aluminum</option>
  <option value="2">Cattle</option>
  <option value="3">Coal</option>
  <option value="4">Fish</option>
  <option value="5">Furs</option>
  <option value="6">Gems</option>
  <option value="7">Gold</option>
  <option value="8">Iron</option>
  <option value="9">Lead</option>
  <option value="10">Lumber</option>
  <option value="11">Marble</option>
  <option value="12">Oil</option>
  <option value="13">Pigs</option>
  <option value="14">Rubber</option>
  <option value="15">Silver</option>
  <option value="16">Spices</option>
  <option value="17">Sugar</option>
  <option value="18">Uranium</option>
  <option value="19">Water</option>
  <option value="20">Wheat</option>
  <option value="21">Wine</option>
  </select>
  <br>';
  echo 'I would like Uranium or I have Uranium: <input type="checkbox" name="fax"><br>';
  echo 'E-mail (Will be used to inform you when the trade circle completes): <input type="text" name="email"><br>';
  echo '<input type="Submit">';
}
else if( $action == "submit" )
{
  
  $pieces = explode( "=", $link );
  
  $nation = $_POST['nation'];
  $ruler = $_POST['ruler'];
  $link = $_POST['link'];
  $resource1 = $_POST['resource1'];
  $resource2 = $_POST['resource2'];
  $uranium = $_POST['uranium'];
  $email = $_POST['email'];
  if( $nation != null && $ruler != null && $link != null && $email != null )
  {
    $resource1 = getNumber( $resource1 );
    $resource2 = getNumber( $resource2 );
  
    if( $resource1 > $resource2 )
    {
      $temp = $resource1;
      $resource1 = $resource2;
	  $resource2 = $temp;
    }
  
    $user="kinkoo06_cntrades";
    $password="kinkoodsawesome";
    $database="kinkoo06_cntrades";
    mysql_connect(localhost,$user,$password);
    @mysql_select_db($database) or die( "Unable to select database");
    $query = "INSERT INTO contacts VALUES ('','$nation','$ruler','$pieces[1]','$resource1','$uranium','$email')";
    mysql_query($query);
    mysql_close();
  }
  else
    echo 'lol';
}
else if( $action == "users" )
{
  $user="kinkoo06_cntrades";
  $password="kinkoodsawesome";
  $database="kinkoo06_cntrades";
  mysql_connect(localhost,$user,$password);
  @mysql_select_db($database) or die( "Unable to select database");
  
  $result1;
  $result2;
  if( $resource1 != "" )
  {
    if( $resource2 != "" )
    {
	  $query = "SELECT * FROM resources WHERE resource1='$resource1' resource2='$resource1'";
	  $result1 = mysql_query($query);
	  $num = mysql_numrows($result1);
	  
	  if( $num == 0 )
	  {
	    echo'<tr>';
	    echo'<th>';
		echo'No users found with those resources.';
	    echo'</th>';
	    echo'</tr>';
	  }
	  else
	  {
        $i=0;
        while ($i < $num)
		{
	      $nation = mysql_result($result, $i, "nation");
	      $ruler = mysql_result($result, $i, "ruler");
	      $link = mysql_result($result, $i, "link");
	      $reso1 = mysql_result($result, $i, "resource1");
	      $reso2 = mysql_result($result, $i, "resource2");
	      $uranium = mysql_result($result, $i, "uranium");
		  $res1 = getResource( $reso1 );
		  $res2 = getResource( $reso2 );
		  outputUser( $nation, $ruler, $link, $res1, $res2, $uranium );
		}
      }
    }
	else
	{
	  $query = "SELECT * FROM resources WHERE resource1=$resource1";
	  $result1 = mysql_query($query);
	  $query = "SELECT * FROM resources WHERE resource2=$resource1";
	  $result2 = mysql_query($query);
	  
	  $num1 = mysql_numrows($result1);
	  $num2 = mysql_numrows($result2);
	  
	  if( $num1 == 0 && $num2 == 0  )
	  {
	    echo'<tr>';
	    echo'<th>';
		echo'No users found with those resources.';
	    echo'</th>';
	    echo'</tr>';
	  }
	  else
	  {
        $i=0;
        while ( $i < $num1 )
		{
	      $nation = mysql_result($result, $i, "nation");
	      $ruler = mysql_result($result, $i, "ruler");
	      $link = mysql_result($result, $i, "link");
	      $reso1 = mysql_result($result, $i, "resource1");
	      $reso2 = mysql_result($result, $i, "resource2");
	      $uranium = mysql_result($result, $i, "uranium");
		  $res1 = getResource( $reso1 );
		  $res2 = getResource( $reso2 );
		  outputUser( $nation, $ruler, $link, $res1, $res2, $uranium );
		}
      }
	  if( $num2 != 0 )
	  {
        $i=0;
        while ( $i < $num2 )
		{
	      $nation = mysql_result($result, $i, "nation");
	      $ruler = mysql_result($result, $i, "ruler");
	      $link = mysql_result($result, $i, "link");
	      $reso1 = mysql_result($result, $i, "resource1");
	      $reso2 = mysql_result($result, $i, "resource2");
	      $uranium = mysql_result($result, $i, "uranium");
		  $res1 = getResource( $reso1 );
		  $res2 = getResource( $reso2 );
		  outputUser( $nation, $ruler, $link, $res1, $res2, $uranium );
		}
      }
	}
  }
  else
  {
	$query = "SELECT * FROM resources";
	$result = mysql_query($query);
	$num = mysql_numrows($result);
	
	if( $num == 0 )
	{
	  echo'<tr>';
	  echo'<th>';
	  echo'No users found in the database.';
	  echo'</th>';
	  echo'</tr>';
	}
	else
	{
      $i=0;
      while ( $i < $num2 )
	  {
	    $nation = mysql_result($result, $i, "nation");
	    $ruler = mysql_result($result, $i, "ruler");
	    $link = mysql_result($result, $i, "link");
	    $reso1 = mysql_result($result, $i, "resource1");
	    $reso2 = mysql_result($result, $i, "resource2");
	    $uranium = mysql_result($result, $i, "uranium");
		$res1 = getResource( $reso1 );
		$res2 = getResource( $reso2 );
		outputUser( $nation, $ruler, $link, $res1, $res2, $uranium );
	  }
    }  
  }
  mysql_close();
}
/*else if( $action == "circles" )
{
  if( $completed )
  {
  }
  else
  {
  }
}*/
else
{
  echo 'lol';
}
echo '</body>';
?>