<head>
<?php
$path = $_SERVER['REQUEST_URI'];
$pieces = explode( "?", $path );
$pieces = explode( ",", $pieces[1]);

$ns              = $pieces[0];
$tech            = $pieces[1];
$citizens        = $pieces[2];
$citizens_income = $pieces[3];
$infra           = $pieces[4];

$soldiers        = $pieces[5];
$tanks           = $pieces[6];
$aircraft        = $pieces[7];
$cms             = $pieces[8];
$nukes           = $pieces[9];

$bank         = $pieces[10];
$intelligence = $pieces[11];
$church       = $pieces[12];
$police       = $pieces[13];
$foreign      = $pieces[14];
$stadium      = $pieces[15];

$hospital     = $pieces[16];
$border       = $pieces[17];
$missile      = $pieces[18];
$factory      = $pieces[19];
$school       = $pieces[20];
$harbor       = $pieces[21];

$barrack      = $pieces[22];
$labor        = $pieces[23];
$clinic       = $pieces[24];
$satellite    = $pieces[25];
$guerilla     = $pieces[26];
$university   = $pieces[27];

$internet     = $pieces[28];
$monument     = $pieces[29];
$guniversity  = $pieces[30];
$social       = $pieces[31];
$interstate   = $pieces[32];
$memorial     = $pieces[33];

$space        = $pieces[34];
$movie        = $pieces[35];
$research     = $pieces[36];
$disaster     = $pieces[37];
$temple       = $pieces[38];
$stock        = $pieces[39];

$government   = $pieces[40];
$tax   = $pieces[41];

$resources0   = $pieces[42];
$resources1   = $pieces[43];
$resources2   = $pieces[44];
$resources3   = $pieces[45];
$resources4   = $pieces[46];
$resources5   = $pieces[47];
$resources6   = $pieces[48];
$resources7   = $pieces[49];
$resources8   = $pieces[50];
$resources9   = $pieces[51];
$resources10  = $pieces[52];
$resources11  = $pieces[53];

function aNumber( $num )
{
  if( is_numeric( $num ) )
    return $num;
  return 0;
}

function aBool( $val )
{
  if( is_numeric( $val ) )
  {
    if( $val == 1 )
    return "CHECKED";
  }
  return 0;
}

?>
<SCRIPT LANGUAGE="JavaScript" SRC="calc.js">

</script>
<LINK href="ss.css" rel="stylesheet" type="text/css">
<TITLE>\m/ CN Calculator</TITLE>
</head>
<body onload="load()">
<table align=center valign=middle height=100% class="boundingbox">
<tr class="boundingbox">
<th>
</th>
<th class="boundingbox">
<div id="selgovernment" style="display: none;"><?php echo aNumber( $government ) ?></div>
<div id="seltax" style="display: none;"><?php echo aNumber( $tax ) ?></div>

<div id="citcount" style="display: none;"><?php echo aNumber( $citizens ) ?></div>
<div id="citincome" style="display: none;"><?php echo aNumber( $citizens_income ) ?></div>

<div id="selbank" style="display: none;"><?php echo aNumber( $bank ) ?></div>
<div id="selbarrack" style="display: none;"><?php echo aNumber( $barrack ) ?></div>
<div id="selborder" style="display: none;"><?php echo aNumber( $border ) ?></div>
<div id="selchurch" style="display: none;"><?php echo aNumber( $church ) ?></div>
<div id="selclinic" style="display: none;"><?php echo aNumber( $clinic ) ?></div>
<div id="selfactory" style="display: none;"><?php echo aNumber( $factory ) ?></div>
<div id="selforeign" style="display: none;"><?php echo aNumber( $foreign ) ?></div>
<div id="selguerilla" style="display: none;"><?php echo aNumber( $guerilla ) ?></div>
<div id="selharbor" style="display: none;"><?php echo aNumber( $harbor ) ?></div>
<div id="selhospital" style="display: none;"><?php echo aNumber( $hospital ) ?></div>
<div id="selintelligence" style="display: none;"><?php echo aNumber( $intelligence ) ?></div>
<div id="sellabor" style="display: none;"><?php echo aNumber( $labor ) ?></div>
<div id="selmissile" style="display: none;"><?php echo aNumber( $missile ) ?></div>
<div id="selpolicehq" style="display: none;"><?php echo aNumber( $police ) ?></div>
<div id="selsatellite" style="display: none;"><?php echo aNumber( $satellite ) ?></div>
<div id="selschool" style="display: none;"><?php echo aNumber( $school ) ?></div>
<div id="selstadium" style="display: none;"><?php echo aNumber( $stadium ) ?></div>
<div id="seluniversity" style="display: none;"><?php echo aNumber( $university ) ?></div>

<div id="resource0" style="display: none;"><?php echo aNumber( $resources0 ) ?></div>
<div id="resource1" style="display: none;"><?php echo aNumber( $resources1 ) ?></div>
<div id="resource2" style="display: none;"><?php echo aNumber( $resources2 ) ?></div>
<div id="resource3" style="display: none;"><?php echo aNumber( $resources3 ) ?></div>
<div id="resource4" style="display: none;"><?php echo aNumber( $resources4 ) ?></div>
<div id="resource5" style="display: none;"><?php echo aNumber( $resources5 ) ?></div>
<div id="resource6" style="display: none;"><?php echo aNumber( $resources6 ) ?></div>
<div id="resource7" style="display: none;"><?php echo aNumber( $resources7 ) ?></div>
<div id="resource8" style="display: none;"><?php echo aNumber( $resources8 ) ?></div>
<div id="resource9" style="display: none;"><?php echo aNumber( $resources9 ) ?></div>
<div id="resource10" style="display: none;"><?php echo aNumber( $resources10 ) ?></div>
<div id="resource11" style="display: none;"><?php echo aNumber( $resources11 ) ?></div>
<table width=800 cellpadding=0 cellspacing=0>
  <tr>
    <th colspan=3>
	  \m/ CN Calculator
	</th>
  </tr>
  <tr>
    <th width=100>
      <table align=left cellpadding=0 cellspacing=0>
        <tr>
          <th><input type="image" src="aluminum.gif" onClick="toggle_resource( 'aluminum' )"></th>
          <th><input type="image" src="cattle.gif" onClick="toggle_resource( 'cattle' )"></th>
          <th><input type="image" src="coal.gif" onClick="toggle_resource( 'coal' )"></th>
        </tr>
  
        <tr>
          <th><input type="image" src="fish.gif" onClick="toggle_resource( 'fish' )"></th>
          <th><input type="image" src="furs.gif" onClick="toggle_resource( 'furs' )"></th>
          <th><input type="image" src="gems.gif" onClick="toggle_resource( 'gems' )"></th>
        </tr>
  
        <tr>
          <th><input type="image" src="gold.gif" onClick="toggle_resource( 'gold' )"></th>
          <th><input type="image" src="iron.gif" onClick="toggle_resource( 'iron' )"></th>
          <th><input type="image" src="lead.gif" onClick="toggle_resource( 'lead' )"></th>
        </tr>
  
        <tr>
          <th><input type="image" src="lumber.gif" onClick="toggle_resource( 'lumber' )"></th>
          <th><input type="image" src="marble.gif" onClick="toggle_resource( 'marble' )"></th>
          <th><input type="image" src="oil.gif" onClick="toggle_resource( 'oil' )"></th>
        </tr>
  
        <tr>
          <th><input type="image" src="pigs.gif" onClick="toggle_resource( 'pigs' )"></th>
          <th><input type="image" src="rubber.gif" onClick="toggle_resource( 'rubber' )"></th>
          <th><input type="image" src="silver.gif" onClick="toggle_resource( 'silver' )"></th>
        </tr>
  
        <tr>
          <th><input type="image" src="spices.gif" onClick="toggle_resource( 'spices' )"></th>
          <th><input type="image" src="sugar.gif" onClick="toggle_resource( 'sugar' )"></th>
          <th><input type="image" src="uranium.gif" onClick="toggle_resource( 'uranium' )"></th>
        </tr>
  
        <tr>
          <th><input type="image" src="water.gif" onClick="toggle_resource( 'water' )"></th>
          <th><input type="image" src="wheat.gif" onClick="toggle_resource( 'wheat' )"></th>
          <th><input type="image" src="wine.gif" onClick="toggle_resource( 'wine' )"></th>
        </tr>
      </table>
    </th>
    <th>
      <table height=232 width=532 cellpadding=0 cellspacing=0>
	    <tr height=47 valign="top">
		  <th colspan=4>
            Connected Resources<BR>
            <img src="blank.gif" name="res0" style="display:none;" >
            <img src="blank.gif" name="res1" style="display:none;">
            <img src="blank.gif" name="res2" style="display:none;">
            <img src="blank.gif" name="res3" style="display:none;">
            <img src="blank.gif" name="res4" style="display:none;">
            <img src="blank.gif" name="res5" style="display:none;">
            <img src="blank.gif" name="res6" style="display:none;">
            <img src="blank.gif" name="res7" style="display:none;">
            <img src="blank.gif" name="res8" style="display:none;">
            <img src="blank.gif" name="res9" style="display:none;">
            <img src="blank.gif" name="res10" style="display:none;">
            <img src="blank.gif" name="res11" style="display:none;">
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Infra Cost
		  </th>
		  <th width=128>
		    <div id="infra_cost">0</div>
		  </th>
  		  <th width=128>
		    Infra Upkeep
		  </th>
		  <th width=128>
		    <div id="infra_upkeep">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Tech Cost
		  </th>
		  <th width=128>
		    <div id="tech_cost">0</div>
		  </th>
  		  <th width=128>
		    Citizen Count
		  </th>
		  <th width=128>
		    <div id="citizen_count">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Citizen Income
		  </th>
		  <th width=128>
		    <div id="citi_income">0</div>
		  </th>
  		  <th width=128>
		    Population Happiness
		  </th>
		  <th width=128>
		    <div id="pop_happy">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Income Percent
		  </th>
		  <th width=128>
		    <div id="citizen_income_percent">0</div>
		  </th>
  		  <th width=128>
		    Extra Aircraft
		  </th>
		  <th width=128>
		    <div id="extra_aircraft">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Land Cost
		  </th>
		  <th width=128>
		    <div id="land_cost">0</div>
		  </th>
  		  <th width=128>
		    Natural Growth
		  </th>
		  <th width=128>
		    <div id="natural_growth">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Purchased Land
		  </th>
		  <th width=128>
		    <div id="purchased_land">0</div>
		  </th>
  		  <th width=128>
		    Environment
		  </th>
		  <th width=128>
		    <div id="environment">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Soldier Count
		  </th>
		  <th width=128>
		    <div id="soldier_count">0</div>
		  </th>
  		  <th width=128>
		    Soldier Upkeep
		  </th>
		  <th width=128>
		    <div id="soldier_upkeep">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Soldier Cost
		  </th>
		  <th width=128>
		    <div id="soldier_cost">0</div>
		  </th>
  		  <th width=128>
		    Tank Cost
		  </th>
		  <th width=128>
		    <div id="tank_cost">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Tank Upkeep
		  </th>
		  <th width=128>
		    <div id="tank_upkeep">0</div>
		  </th>
  		  <th width=128>
		    Aircraft Cost
		  </th>
		  <th width=128>
		    <div id="aircraft_cost">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Aircraft Upkeep
		  </th>
		  <th width=128>
		    <div id="aircraft_upkeep">0</div>
		  </th>
  		  <th width=128>
		    CM/Nuke Upkeep
		  </th>
		  <th width=128>
		    <div id="nuke_upkeep">0</div>
		  </th>
		</tr>
		<tr>
  		  <th width=128>
		    Environment Percent
		  </th>
		  <th width=128>
		    <div id="enviro_percent">0</div>
		  </th>
  		  <th width=128>
		    CM Cost
		  </th>
		  <th width=128>
		    <div id="cm_cost">0</div>
		  </th>
		</tr>
	    <tr height=55 valign="bottom">
		  <th colspan=4>
            <img src="blank.gif" name="bon0" style="display:none;">
            <img src="blank.gif" name="bon1" style="display:none;">
            <img src="blank.gif" name="bon2" style="display:none;">
            <img src="blank.gif" name="bon3" style="display:none;">
            <img src="blank.gif" name="bon4" style="display:none;">
            <img src="blank.gif" name="bon5" style="display:none;">
            <img src="blank.gif" name="bon6" style="display:none;">
            <img src="blank.gif" name="bon7" style="display:none;">
			<br>
            Bonus Resources
		  </th>
		</tr>
		<tr>
		  <th></th>
		  <table>
		    <tr>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
              <th>
			    <input type="image" src="affluent.gif" onClick="set_bonus( 'affluent' )">
			  </th>
			<tr>
		  <th></th>
		</tr>
	  </table>
    </th>
    <th width=200>
      <table align=right height=232 cellpadding=0 cellspacing=0>
        <tr>
          <th>Nation Strength</th>
          <th><input type="text" id="ns" size=12 value=<?php echo aNumber( $ns ) ?> onChange="update()"></th>
        </tr>
        <tr>
          <th>Tech</th>
          <th><input type="text" id="tech" size=12 value=<?php echo aNumber( $tech ) ?> onChange="update()"></th>
        </tr>
        <tr>
          <th>Citizens</th>
          <th><input type="text" id="citizens" size=12 value=0 onChange="setCitizen()"></th>
        </tr>
        <tr>
          <th>Citizen Income</th>
          <th><input type="text" id="citizen_income" size=12 value=0 onChange="setIncome()"></th>
        </tr>
        <tr>
          <th>Tax Rate</th>
          <th align="right">
		    <select id="tax_rate" onChange="update()">
		      <option value=".10">10%&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</option>
		      <option value=".11">11%</option>
		      <option value=".12">12%</option>
		      <option value=".13">13%</option>
		      <option value=".14">14%</option>
		      <option value=".15">15%</option>
		      <option value=".16">16%</option>
		      <option value=".17">17%</option>
		      <option value=".18">18%</option>
		      <option value=".19">19%</option>
		      <option value=".20">20%</option>
		      <option value=".21">21%</option>
		      <option value=".22">22%</option>
		      <option value=".23">23%</option>
		      <option value=".24">24%</option>
		      <option value=".25">25%</option>
		      <option value=".26">26%</option>
		      <option value=".27">27%</option>
		      <option value=".28">28%</option>
			</select>
		  </th>
        </tr>
        <tr>
          <th>Government</th>
          <th>
		    <select id="government" onChange="update()">
		      <option value="capitalist">Capitalist</option>
		      <option value="communist">Communist</option>
		      <option value="democracy">Democracy</option>
		      <option value="dictatorship">Dictatorship</option>
		      <option value="federal">Federal</option>
		      <option value="monarchy">Monarchy</option>
		      <option value="republic">Republic</option>
		      <option value="revolutionary">Revolutiony</option>
		      <option value="totalitarian">Totalitarian</option>
		      <option value="transitional">Transitional</option>
		    </select>
		  </th>
        </tr>
        <tr>
          <th>Taxes</th>
          <th><input readonly type="text" id="taxes" size=12 value="$0.00"></th>
        </tr>
        <tr>
          <th>Bills</th>
          <th><input readonly type="text" id="bills" size=12 value="$0.00"></th>
        </tr>
        <tr>
          <th>Income</th>
          <th><input readonly type="text" id="money" size=12 value="$0.00"></th>
        </tr>
      </table>
    </th>
  <tr>
    <th colspan=3>
      <table align=center cellpadding=0 cellspacing=0>
        <tr valign=middle>
          <th width=100></th>
          <th>Infra</th>
          <th>Soldiers</th>
          <th>Tanks</th>
          <th>Aircraft</th>
          <th>CMs</th>
          <th>Nukes</th>
          <th>Improvements</th>
          <th>Wonders</th>
        </tr>

        <tr valign=middle>
          <th width=100>Amount</th>
          <th><input type="text" id="infra" size=11 value=<?php echo aNumber( $infra ) ?> onChange="update()"></th>
          <th><input type="text" id="soldiers" size=11 value=<?php echo aNumber( $soldiers ) ?> onChange="update()"></th>
          <th><input type="text" id="tanks" size=11 value=<?php echo aNumber( $tanks ) ?> onChange="update()"></th>
          <th><input type="text" id="aircraft" size=11 value=<?php echo aNumber( $aircraft ) ?> onChange="update()"></th>
          <th><input type="text" id="cms" size=11 value=<?php echo aNumber( $cms ) ?> onChange="update()"></th>
          <th><input type="text" id="nukes" size=11 value=<?php echo aNumber( $nukes ) ?> onChange="update()"></th>
          <th><input readonly type="text" id="improvements" size=11 value=0 onChange="update()"></th>
          <th><input readonly type="text" id="wonder" size=11 value=0 onChange="update()"></th>
        </tr>

        <tr width=100 valign=middle>
          <th>Upkeep</th>
          <th><input readonly type="text" id="output_infra" size=11 value="$0.00"></th>
          <th><input readonly type="text" id="output_soldiers" size=11 value="$0.00"></th>
          <th><input readonly type="text" id="output_tanks" size=11 value="$0.00"></th>
          <th><input readonly type="text" id="output_aircraft" size=11 value="$0.00"></th>
          <th><input readonly type="text" id="output_cms" size=11 value="$0.00"></th>
          <th><input readonly type="text" id="output_nukes" size=11 value="$0.00"></th>
          <th><input readonly type="text" id="output_improvements" size=11 value="$0.00"></th>
          <th><input readonly type="text" id="output_wonder" size=11 value="$0.00"></th>
        </tr>
      </table>
    </th>
  </tr>
    <tr>
    <th colspan=3>
	  <table>
	    <tr>
		  <th colspan=6>
		    Improvements
		  </th>
		  <th colspan=4>
		    Wonders
		  </th>
		</tr>
	    <tr>
		  <th width=140>
		    Banks
		  </th>
		  <th>
		    <select id="bank" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Hospitals
		  </th>
		  <th>
		    <select id="hospital" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
			</select>
		  </th>
		  <th width=140>
		    Barracks
		  </th>
		  <th>
		    <select id="barrack" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		        <th>
		          Internet 
		        </th>
		        <th>
		         <input type="checkbox" id="internet" <?php echo aBool( $internet ) ?> onClick="update()" />
		        </th>
		        <th>
		          Space Program
		        </th>
		        <th>
		          <input type="checkbox" id="space" <?php echo aBool( $space ) ?> onClick="update()" />
		        </th>
		</tr>
	    <tr>
		  <th width=140>
		    Intelligence Agencies
		  </th>
		  <th>
		    <select id="intelligence" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Border Walls
		  </th>
		  <th
		    <select id="border" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
	      </th>
		  <th width=140>
		    Labor Camps
		  </th>
		  <th>
		    <select id="labor" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
				<th>
		          Great Monument 
		        </th>
		        <th>
		          <input type="checkbox" id="monument" <?php echo aBool( $monument ) ?> onClick="update()" />
		        </th>
		        <th>
		          Movie Industry
		        </th>
		        <th>
		          <input type="checkbox" id="movie" <?php echo aBool( $movie ) ?> onClick="update()" />
		        </th>
		</tr>
	    <tr>
		  <th width=140>
		    Churches
		  </th>
		  <th>
		    <select id="church" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Missile Defense
		  </th>
		  <th>
		    <select id="missile" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Clinics
		  </th>
		  <th>
		    <select id="clinic" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		        <th>
		          Great University 
		        </th>
		        <th>
		          <input type="checkbox" id="guniversity" <?php echo aBool( $guniversity ) ?> onClick="update()" />
		        </th>
		        <th>
		          National Research Lab
		        </th>
		        <th>
		          <input type="checkbox" id="research" <?php echo aBool( $research ) ?> onClick="update()" />
		        </th>
		</tr>
	    <tr>
		  <th width=140>
		    Police Headquarters
		  </th>
		  <th>
		    <select id="policehq" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Factories
		  </th>
		  <th>
		    <select id="factory" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Satellites
		  </th>
		  <th>
		    <select id="satellite" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		        <th>
		          Social Security System 
		        </th>
		        <th>
		          <input type="checkbox" id="social" <?php echo aBool( $social ) ?> onClick="update()" />
		        </th>
		        <th>
		          Disaster Relief Agency
		        </th>
		        <th>
		          <input type="checkbox" id="disaster" <?php echo aBool( $disaster ) ?> onClick="update()" />
		        </th>
		</tr>
	    <tr>
		  <th width=140>
		    Foreign Ministries
		  </th>
		  <th>
		    <select id="foreign" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
			</select>
		  </th>
		  <th width=140>
		    Schools
		  </th>
		  <th>
		    <select id="school" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Guerilla Camps
		  </th>
		  <th>
		    <select id="guerilla" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		        <th>
		          Interstate System 
		        </th>
		        <th>
		          <input type="checkbox" id="interstate" <?php echo aBool( $interstate ) ?> onClick="update()" />
		        </th>
		        <th>
		          Great Temple
		        </th>
		        <th>
		          <input type="checkbox" id="temple" <?php echo aBool( $temple ) ?> onClick="update()" />
		        </th>
		</tr>
	    <tr>
		  <th width=140>
		    Stadiums
		  </th>
		  <th>
		    <select id="stadium" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Harbors
		  </th>
		  <th>
		    <select id="harbor" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
		      <option value="3">3</option>
		      <option value="4">4</option>
		      <option value="5">5</option>
			</select>
		  </th>
		  <th width=140>
		    Universities
		  </th>
		  <th>
		    <select id="university" onChange="update()">
		      <option value="0">0</option>
		      <option value="1">1</option>
		      <option value="2">2</option>
			</select>
		  </th>
		        <th>
		          National War Memorial
		        </th>
		        <th>
		          <input type="checkbox" id="memorial" <?php echo aBool( $memorial ) ?> onClick="update()" />
		        </th>
		        <th>
		          Stock Market
		        </th>
		        <th>
		          <input type="checkbox" id="stock" <?php echo aBool( $stock ) ?> onClick="update()" />
		        </th>
		</tr>
	  </table>
    </th>
  </tr>
  <tr>
    <th colspan=3>
	  <div id=link><a href="http://www.kinkood.com/cn/calc.php">Right Click and Copy to Get A Link To This Form</a></div>
    </th>
  </tr>
</table>
</th>
<th>
</th>
</tr>
</table>
</body>