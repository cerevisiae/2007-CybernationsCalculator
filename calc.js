<!--
  current_resource = 0
  current_bonus = 0
  resources = new Array(12)
  res_bonuses = new Array(12)
  res_img = new Array(12)
  bon_img = new Array(8)
  
  var inf_cost   = 1
  var inf_upkeep = 1
  var air_cost   = 1
  var air_upkeep = 1
  var lan_cost   = 1
  var pur_land   = 1
  var nat_land   = 1
  var sol_count  = 1
  var sol_cost   = 0
  var sol_upkeep = 0
  var tan_upkeep = 1
  var tan_cost   = 1
  var cit_count  = 1
  var cit_income = 0
  var income_perc = 1
  var pop_happin = 0
  var enviro     = 0
  var tek_cost   = 1
  var nuk_upkeep = 1
  var enviro_per = 1
  var air_extra  = 0
  
  var citizens       = 0
  var citi_income = 0
  
  for(i = 0; i < 12; i++)
  {
    res_img[i] = "res" + i
  }
  for(i = 0; i < 8; i++)
  {
    bon_img[i] = "bon" + i
  }

  nukes = 5000
  cms = 150
  soldiers = 2
  tanks = 40
  aircraft = 200
  improvements = 3000
  wonders = 5000
  
  infra_upkeep = new Array(12)
  infra_upkeep[0] = .04
  infra_upkeep[1] = .05
  infra_upkeep[2] = .06
  infra_upkeep[3] = .07
  infra_upkeep[4] = .08
  infra_upkeep[5] = .09
  infra_upkeep[6] = .11
  infra_upkeep[7] = .13
  infra_upkeep[8] = .15
  infra_upkeep[9] = .17
  infra_upkeep[10] = .175
  infra_upkeep[11] = .18
  
  infra_range = new Array(11)
  infra_range[0] = 100
  infra_range[1] = 200
  infra_range[2] = 300
  infra_range[3] = 500
  infra_range[4] = 700
  infra_range[5] = 1000
  infra_range[6] = 2000
  infra_range[7] = 3000
  infra_range[8] = 4000
  infra_range[9] = 5000
  infra_range[10] = 8000
  
  update()
  
function load()
{
  document.getElementById('government').selectedIndex = parseFloat( document.getElementById('selgovernment').innerHTML )
  
  document.getElementById('bank').selectedIndex = parseFloat( document.getElementById('selbank').innerHTML )
  document.getElementById('barrack').selectedIndex = parseFloat( document.getElementById('selbarrack').innerHTML )
  document.getElementById('border').selectedIndex = parseFloat( document.getElementById('selborder').innerHTML )
  document.getElementById('church').selectedIndex = parseFloat( document.getElementById('selchurch').innerHTML )
  document.getElementById('clinic').selectedIndex = parseFloat( document.getElementById('selclinic').innerHTML )
  document.getElementById('factory').selectedIndex = parseFloat( document.getElementById('selfactory').innerHTML )
  document.getElementById('foreign').selectedIndex = parseFloat( document.getElementById('selforeign').innerHTML )
  document.getElementById('guerilla').selectedIndex = parseFloat( document.getElementById('selguerilla').innerHTML )
  document.getElementById('harbor').selectedIndex = parseFloat( document.getElementById('selharbor').innerHTML )
  document.getElementById('hospital').selectedIndex = parseFloat( document.getElementById('selhospital').innerHTML )
  document.getElementById('intelligence').selectedIndex = parseFloat( document.getElementById('selintelligence').innerHTML )
  document.getElementById('labor').selectedIndex = parseFloat( document.getElementById('sellabor').innerHTML )
  document.getElementById('missile').selectedIndex = parseFloat( document.getElementById('selmissile').innerHTML )
  document.getElementById('policehq').selectedIndex = parseFloat( document.getElementById('selpolicehq').innerHTML )
  document.getElementById('satellite').selectedIndex = parseFloat( document.getElementById('selsatellite').innerHTML )
  document.getElementById('school').selectedIndex = parseFloat( document.getElementById('selschool').innerHTML )
  document.getElementById('stadium').selectedIndex = parseFloat( document.getElementById('selstadium').innerHTML )
  document.getElementById('university').selectedIndex = parseFloat( document.getElementById('seluniversity').innerHTML )
  
  improve()
  
  document.getElementById('tax_rate').selectedIndex = parseFloat( document.getElementById('seltax').innerHTML )
  
  add_resource( parseFloat( document.getElementById('resource0').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource1').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource2').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource3').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource4').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource5').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource6').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource7').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource8').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource9').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource10').innerHTML ) )
  add_resource( parseFloat( document.getElementById('resource11').innerHTML ) )
  
  citizens = parseFloat( formatNumber( document.getElementById('citcount').innerHTML ) ) / cit_count
  citi_income = parseFloat( formatNumber( parseFloat( document.getElementById('citincome').innerHTML ) ) ) / income_perc - cit_income
  
  inf_cost   = 1
  inf_upkeep = 1
  air_cost   = 1
  air_upkeep = 1
  lan_cost   = 1
  pur_land   = 1
  nat_land   = 1
  sol_count  = 1
  sol_cost   = 0
  sol_upkeep = 0
  tan_upkeep = 1
  tan_cost   = 1
  cit_count  = 1
  cit_income = 0
  income_perc = 1
  pop_happin = 0
  enviro     = 0
  tek_cost   = 1
  nuk_upkeep = 1
  enviro_per = 1
  air_extra  = 0
  
  update()
}

function getCitizen()
{
  return Math.round( citizens * cit_count )
}

function setCitizen()
{
  citizens = parseFloat( formatNumber( document.getElementById('citizens').value ) ) / cit_count
  update()
}

function getIncome()
{
  return Math.round( ( citi_income + cit_income ) * income_perc * 100 ) / 100
}

function setIncome()
{
  citi_income = parseFloat( formatNumber( document.getElementById('citizen_income').value ) ) / income_perc - cit_income
  update()
}

function appendOption(num)
{
  var elOptNew = document.createElement('option')
  elOptNew.text = Math.round( num * 100 ) + "%"
  elOptNew.value = num
  var elSel = document.getElementById('tax_rate');

  try {
    elSel.add(elOptNew, null); // standards compliant; doesn't work in IE
  }
  catch(ex) {
    elSel.add(elOptNew); // IE only
  }
}

function add_resource( num )
{
  if( num == 1 )
    toggle_resource( "aluminum" )
  else if( num == 2 )
    toggle_resource( "cattle" )
  else if( num == 3 )
    toggle_resource( "coal" )
  else if( num == 4 )
    toggle_resource( "fish" )
  else if( num == 5 )
    toggle_resource( "fur" )
  else if( num == 6 )
    toggle_resource( "gems" )
  else if( num == 7 )
    toggle_resource( "gold" )
  else if( num == 8 )
    toggle_resource( "iron" )
  else if( num == 9 )
    toggle_resource( "lead" )
  else if( num == 10 )
    toggle_resource( "lumber" )
  else if( num == 11 )
    toggle_resource( "marble" )
  else if( num == 12 )
    toggle_resource( "oil" )
  else if( num == 13 )
    toggle_resource( "pigs" )
  else if( num == 14 )
    toggle_resource( "rubber" )
  else if( num == 15 )
    toggle_resource( "silver" )
  else if( num == 16 )
    toggle_resource( "spices" )
  else if( num == 17 )
    toggle_resource( "sugar" )
  else if( num == 18 )
    toggle_resource( "uranium" )
  else if( num == 19 )
    toggle_resource( "water" )
  else if( num == 20 )
    toggle_resource( "wheat" )
  else if( num == 21 )
    toggle_resource( "wine" )
}

function get_resource( res )
{
  if( res == "aluminum" )
    num = 1
  else if( res == "cattle" )
	num = 2
  else if( res == "coal" )
	num = 3
  else if( res == "fish" )
	num = 4
  else if( res == "fur" )
	num = 5
  else if( res == "gems" )
	num = 6
  else if( res == "gold" )
	num = 7
  else if( res == "iron" )
	num = 8
  else if( res == "lead" )
	num = 9
  else if( res == "lumber" )
	num = 10
  else if( res == "marble" )
	num = 11
  else if( res == "oil" )
	num = 12
  else if( res == "pigs" )
	num = 13
  else if( res == "rubber" )
	num = 14
  else if( res == "silver" )
	num = 15
  else if( res == "spices" )
	num = 16
  else if( res == "sugar" )
	num = 17
  else if( res == "uranium" )
	num = 18
  else if( res == "water" )
	num = 19
  else if( res == "wheat" )
	num = 20
  else if( res == "wine" )
	num = 21
  else
    num = 0

  return num
}

function generate_link()
{
  url = "http://www.kinkood.com/cn/calc.php?"
  
  
  url = url + formatNumber( document.getElementById('ns').value ) + ","
  url = url + formatNumber( document.getElementById('tech').value ) + ","
  url = url + formatNumber( document.getElementById('citizens').value ) + ","
  url = url + formatNumber( document.getElementById('citizen_income').value ) + ","
  url = url + formatNumber( document.getElementById('infra').value ) + ","
  
  url = url + formatNumber( document.getElementById('soldiers').value ) + ","
  url = url + formatNumber( document.getElementById('tanks').value ) + ","
  url = url + formatNumber( document.getElementById('aircraft').value ) + ","
  url = url + formatNumber( document.getElementById('cms').value ) + ","
  url = url + formatNumber( document.getElementById('nukes').value ) + ","
  
  url = url + document.getElementById('bank').selectedIndex + ","
  url = url + document.getElementById('intelligence').selectedIndex + ","
  url = url + document.getElementById('church').selectedIndex + ","
  url = url + document.getElementById('policehq').selectedIndex + ","
  url = url + document.getElementById('foreign').selectedIndex + ","
  url = url + document.getElementById('stadium').selectedIndex + ","
  
  url = url + document.getElementById('hospital').selectedIndex + ","
  url = url + document.getElementById('border').selectedIndex + ","
  url = url + document.getElementById('missile').selectedIndex + ","
  url = url + document.getElementById('factory').selectedIndex + ","
  url = url + document.getElementById('school').selectedIndex + ","
  url = url + document.getElementById('harbor').selectedIndex + ","
  
  url = url + document.getElementById('barrack').selectedIndex + ","
  url = url + document.getElementById('labor').selectedIndex + ","
  url = url + document.getElementById('clinic').selectedIndex + ","
  url = url + document.getElementById('satellite').selectedIndex + ","
  url = url + document.getElementById('guerilla').selectedIndex + ","
  url = url + document.getElementById('university').selectedIndex + ","
  
  url = url + is_checked( 'internet') + ","
  url = url + is_checked( 'monument') + ","
  url = url + is_checked( 'guniversity') + ","
  url = url + is_checked( 'social') + ","
  url = url + is_checked( 'interstate') + ","
  url = url + is_checked( 'memorial') + ","
  
  url = url + is_checked( 'space') + ","
  url = url + is_checked( 'movie') + ","
  url = url + is_checked( 'research') + ","
  url = url + is_checked( 'disaster') + ","
  url = url + is_checked( 'temple') + ","
  url = url + is_checked( 'stock') + ","
  
  url = url + document.getElementById('government').selectedIndex + ","
  url = url + document.getElementById('tax_rate').selectedIndex + ","
  
  for( i = 0; i < current_resource; i++ )
    url = url + get_resource( resources[ i ] ) + ","
  document.getElementById('link').innerHTML = "<a href=" + url + ">Right Click and Copy to Get A Link To This Form</a>"
}

function is_checked( won )
{
  if( document.getElementById( won ).checked )
    return 1
  else
    return 0
}
  
function formatCurrency(num) {
  num = num.toString().replace(/\$|\,/g,'');
  if(isNaN(num))
    num = "0";
  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*100+0.50000000001);
  cents = num%100;
  num = Math.floor(num/100).toString();
  if(cents<10)
    cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+','+
  num.substring(num.length-(4*i+3));
  return (((sign)?'':'-') + '$' + num + '.' + cents);
}

function formatNumber( num )
{
  num = num.toString().replace(/\$|\,/g,'')
  return num
}

function update()
{
  reset_bonuses()
  improve()
  for( i = 0; i < current_resource; i++)
  {
    resource_bonus( resources[i] )
  }
  for( i = 0; i < current_bonus; i++)
  {
    bonus_bonus( res_bonuses[i] )
  }
  
  document.getElementById('infra_cost').innerHTML          = Math.round( ( inf_cost - 1 ) * 100 ) / 100
  document.getElementById('infra_upkeep').innerHTML        = Math.round( ( inf_upkeep - 1 ) * 100 ) / 100
  document.getElementById('aircraft_cost').innerHTML       = Math.round( ( air_cost - 1 ) * 100 ) / 100
  document.getElementById('aircraft_upkeep').innerHTML     = Math.round( ( air_upkeep - 1 ) * 100 ) / 100
  document.getElementById('land_cost').innerHTML           = Math.round( ( lan_cost - 1 ) * 100 ) / 100
  document.getElementById('purchased_land').innerHTML      = Math.round( ( pur_land - 1 ) * 100 ) / 100
  document.getElementById('natural_growth').innerHTML      = Math.round( ( nat_land - 1 ) * 100 ) / 100
  document.getElementById('soldier_count').innerHTML       = Math.round( ( sol_count - 1 ) * 100 ) / 100
  document.getElementById('soldier_cost').innerHTML        = sol_cost
  document.getElementById('soldier_upkeep').innerHTML      = sol_upkeep
  document.getElementById('tank_upkeep').innerHTML         = Math.round( ( tan_upkeep - 1 ) * 100 ) / 100
  document.getElementById('tank_cost').innerHTML           = Math.round( ( tan_cost - 1 ) * 100 ) / 100
  document.getElementById('citizen_count').innerHTML       = Math.round( ( cit_count - 1 ) * 100 ) / 100
  document.getElementById('citizen_income_percent').innerHTML       = Math.round( ( income_perc - 1 ) * 100 ) / 100
  document.getElementById('citi_income').innerHTML      = cit_income
  document.getElementById('pop_happy').innerHTML           = pop_happin
  document.getElementById('environment').innerHTML         = enviro
  document.getElementById('tech_cost').innerHTML           = Math.round( ( tek_cost - 1 ) * 100 ) / 100
  document.getElementById('nuke_upkeep').innerHTML         = Math.round( ( nuk_upkeep - 1 ) * 100 ) / 100
  document.getElementById('enviro_percent').innerHTML      = Math.round( ( enviro_per - 1 ) * 100 ) / 100
  document.getElementById('extra_aircraft').innerHTML      = air_extra
  
  imp =          upkeep( parseFloat( formatNumber( document.getElementById('improvements').value ) ), improvements )
  cm  =      upkeep_cms( parseFloat( formatNumber( document.getElementById('cms'         ).value ) ), cms          )
  inf =    upkeep_infra( parseFloat( formatNumber( document.getElementById('infra'       ).value ) )               )
  nuk =    upkeep_nukes( parseFloat( formatNumber( document.getElementById('nukes'       ).value ) ), nukes        )
  tan =    upkeep_tanks( parseFloat( formatNumber( document.getElementById('tanks'       ).value ) )               )
  sol = upkeep_soldiers( parseFloat( formatNumber( document.getElementById('soldiers'    ).value ) ), soldiers     )
  air = upkeep_aircraft( parseFloat( formatNumber( document.getElementById('aircraft'    ).value ) ), aircraft     )
  won =          upkeep( parseFloat( formatNumber( document.getElementById('wonder'      ).value ) ), wonders      )
  
  bill = imp + cm + inf + nuk + tan + sol + air + won
  
  document.getElementById('citizens').value = getCitizen()
  document.getElementById('citizen_income').value = getIncome()
  
  document.getElementById('output_improvements').value = formatCurrency( imp )
  document.getElementById('output_nukes').value = formatCurrency( nuk )
  document.getElementById('output_cms').value = formatCurrency( cm )
  document.getElementById('output_soldiers').value = formatCurrency( sol )
  document.getElementById('output_aircraft').value = formatCurrency( air )
  document.getElementById('output_tanks').value = formatCurrency( tan )
  document.getElementById('output_infra').value = formatCurrency( inf )
  document.getElementById('output_wonder').value = formatCurrency( won )
  
  generate_link()
  
  citizen_incomes = parseFloat( formatNumber( document.getElementById('citizen_income').value ) )
  citizen_taxes = parseFloat( formatNumber( document.getElementById('tax_rate').value ) )
  citizenses = parseFloat( formatNumber( document.getElementById('citizens').value ) )
  
  income = citizen_incomes * citizen_taxes
  tax = citizenses * income
  
  document.getElementById('taxes').value = formatCurrency( tax )
  document.getElementById('bills').value = formatCurrency( bill )
  document.getElementById('money').value = formatCurrency( tax - bill )
  
}

function reset_bonuses()
{
  inf_cost   = 1
  inf_upkeep = 1
  air_cost   = 1
  air_upkeep = 1
  lan_cost   = 1
  pur_land   = 1
  nat_land   = 1
  sol_count  = 1
  sol_cost   = 0
  sol_upkeep = 0
  tan_upkeep = 1
  tan_cost   = 1
  cit_count  = 1
  cit_income = 0
  income_perc = 1
  pop_happin = 0
  enviro     = 0
  tek_cost   = 1
  nuk_upkeep = 1
  enviro_per = 1
  air_extra  = 0
}

function improve()
{
  bank          = parseFloat( formatNumber(document.getElementById('bank'        ).value) )
  barrack       = parseFloat( formatNumber(document.getElementById('barrack'     ).value) )
  border        = parseFloat( formatNumber(document.getElementById('border'      ).value) )
  church        = parseFloat( formatNumber(document.getElementById('church'      ).value) )
  clinic        = parseFloat( formatNumber(document.getElementById('clinic'      ).value) )
  factory       = parseFloat( formatNumber(document.getElementById('factory'     ).value) )
  foreign       = parseFloat( formatNumber(document.getElementById('foreign'     ).value) )
  guerilla      = parseFloat( formatNumber(document.getElementById('guerilla'    ).value) )
  harbor        = parseFloat( formatNumber(document.getElementById('harbor'      ).value) )
  hospital      = parseFloat( formatNumber(document.getElementById('hospital'    ).value) )
  intelligence  = parseFloat( formatNumber(document.getElementById('intelligence').value) )
  labor         = parseFloat( formatNumber(document.getElementById('labor'       ).value) )
  missile       = parseFloat( formatNumber(document.getElementById('missile'     ).value) )
  policehq      = parseFloat( formatNumber(document.getElementById('policehq'    ).value) )
  satellite     = parseFloat( formatNumber(document.getElementById('satellite'   ).value) )
  school        = parseFloat( formatNumber(document.getElementById('school'      ).value) )
  stadium       = parseFloat( formatNumber(document.getElementById('stadium'     ).value) )
  university    = parseFloat( formatNumber(document.getElementById('university'  ).value) )
  
  total = bank + barrack + border + church + clinic + factory + foreign + guerilla + harbor + hospital + intelligence + labor + missile + policehq + satellite + school + stadium + university
  
  document.getElementById('improvements').value = total
  
  income_perc = income_perc * ( 1 + .08 * bank )
  income_perc = income_perc * ( 1 + .05 * foreign )
  income_perc = income_perc * ( 1 - .1  * guerilla )
  income_perc = income_perc * ( 1 + .01 * harbor )
  income_perc = income_perc * ( 1 + .05 * school )
  income_perc = income_perc * ( 1 + .08 * university )
  
  sol_count = sol_count * ( 1 + .2 * barrack )
  sol_count = sol_count * ( 1 + .35 * guerilla )
  
  sol_upkeep = sol_upkeep * ( 1 - .1 * barrack )
  sol_upkeep = sol_upkeep * ( 1 - .1 * guerilla )
  
  pop_happin = pop_happin + 1 * church
  pop_happin = pop_happin + 2 * border
  pop_happin = pop_happin - 1 * labor
  pop_happin = pop_happin + 2 * policehq
  pop_happin = pop_happin + 3 * stadium
	
  cit_count = cit_count * ( 1 + .02 * barrack )
  cit_count = cit_count * ( 1 + .02 * ( clinic - border ) )
  cit_count = cit_count * ( 1 + .06 * hospital )
  
  enviro = enviro + 1 * border
  
  tek_cost = tek_cost * ( 1 - .1 * university )
  
  tan_cost = tan_cost * ( 1 - .1 * factory )

  inf_cost = inf_cost * ( 1 - .08 * factory )
  
  inf_upkeep = inf_upkeep * ( 1 - .1 * labor )
  
  wonder = 0
  
  if( document.getElementById('internet').checked )
  {
    pop_happin = pop_happin + 5
	wonder++
  }
  if( document.getElementById('space').checked )
  {
    pop_happin = pop_happin + 3
	tek_cost = tek_cost * .97
	air_cost = air_cost * .95
	wonder++
  }
  if( document.getElementById('monument').checked )
  {
    pop_happin = pop_happin + 4
	wonder++
  }
  if( document.getElementById('movie').checked )
  {
    pop_happin = pop_happin + 3
	wonder++
  }
  if( document.getElementById('guniversity').checked )
  {
    tek_cost = tek_cost * .9
    pop_happin = pop_happin + ( document.getElementById('tech').value - 300 ) * .02
	wonder++
  }
  if( document.getElementById('research').checked )
  {
    cit_count = cit_count * 1.05
	tek_cost = tek_cost * .97
	wonder++
  }
  
  taxer = document.getElementById('tax_rate')
  i = taxer.length
  if( document.getElementById('social').checked )
  {
	wonder++
    if( taxer.options[i - 1].text != "30%" )
	{
	  appendOption(.29)
      appendOption(.30)
	}
  }
  else
  {
    if( taxer.options[i - 1].text == "30%" )
	{
	  taxer.remove( i - 1 )
	  taxer.remove( i - 2 )
	}
  }
  if( document.getElementById('disaster').checked )
  {
    cit_count = cit_count * 1.03
	wonder++
  }
  if( document.getElementById('interstate').checked )
  {
    if_cost = inf_cost * .92
    inf_upkeep = inf_upkeep * .92
	wonder++
  }
  if( document.getElementById('temple').checked )
  {
    pop_happin = pop_happin + 5
	wonder++
  }
  if( document.getElementById('memorial').checked )
  {
    pop_happin = pop_happin + 4
	wonder++
  }
  if( document.getElementById('stock').checked )
  {
    cit_income = cit_income + 10
	wonder++
  }
  
  document.getElementById('wonder').value = wonder
  
  government = document.getElementById('government').value
  
  if( government == "capitalist" )
  {
	inf_cost = inf_cost * .95
    pur_land = pur_land * 1.05
  }
  else if( government == "communist" )
  {
    sol_count = sol_count * 1.08
    pur_land = pur_land * 1.05
	enviro = enviro - 1
  }
  else if( government == "democracy" )
  {
    sol_count = sol_count * 1.08
    pop_happin = pop_happin + 1
  }
  else if( government == "dictatorship" )
  {
	inf_cost = inf_cost * .95
    sol_count = sol_count * 1.08
	enviro = enviro - 2
  }
  else if( government == "federal" )
  {
	inf_cost = inf_cost * .95
    sol_count = sol_count * 1.08
	enviro = enviro - 1
  }
  else if( government == "monarchy" )
  {
	inf_cost = inf_cost * .95
    pop_happin = pop_happin + 1
  }
  else if( government == "republic" )
  {
	inf_cost = inf_cost * .95
    pur_land = pur_land * 1.05
  }
  else if( government == "revolutionary" )
  {
	inf_cost = inf_cost * .95
    pop_happin = pop_happin + 1
	enviro = enviro - 1
  }
  else if( government == "totalitarian" )
  {
    pur_land = pur_land * 1.05
    pop_happin = pop_happin + 1
	enviro = enviro - 1
  }
  else if( government == "transitional" )
  {
    pur_land = pur_land * 1.05
    sol_count = sol_count * 1.08
	enviro = enviro - 1
  }
  
}

function upkeep_infra( num )
{
  upk = infra_range_find( num )
  tech_bonus = 1
  if( document.getElementById('ns').value > 0 )
    tech_bonus = 1 - ( document.getElementById('tech').value * 2 ) / document.getElementById('ns').value
  
  upk = upk * inf_upkeep
  upk = upk * tech_bonus
  
  return  upk * num
}

function infra_range_find( num )
{
  range = 0
  if( num < 100 )
    range = .04
  else if( num < 200 )
    range = .05
  else if( num < 300 )
    range = .06
  else if( num < 500 )
    range = .07
  else if( num < 700 )
    range = .08
  else if( num < 1000 )
    range = .09
  else if( num < 2000 )
    range = .11
  else if( num < 3000 )
    range = .13
  else if( num < 4000 )
    range = .15
  else if( num < 5000 )
    range = .17
  else
    range = .19
  return ( range * num ) + 20
}

function upkeep( amt, cost )
{
  return amt * cost
}

function upkeep_nukes( amt, cost )
{
  total = 0
  if( amt > 1 )
    cost = ( 1 + ( amt - 1 ) * .1 ) * cost
  if( find_resource( "uranium" ) >= 99 )
    total = upkeep( amt, cost * 2 )
  else
    total = upkeep( amt, cost )
  return total * nuk_upkeep

}

function upkeep_cms( amt, cost )
{
  total = 0
  if( amt > 49 )
    total = upkeep( amt, cost * 3 )
  else
    total = upkeep( amt, cost )
  return total * nuk_upkeep
}

function upkeep_soldiers( amt, cost )
{
  return upkeep( amt, cost + sol_upkeep )
}

function upkeep_aircraft( amt, cost )
{
  return upkeep( amt, cost ) * air_upkeep
}

function upkeep_tanks( amt )
{
  total = 0
  if( amt > parseFloat( formatNumber( document.getElementById('citizens').value) * .08 ) )
    total = upkeep( amt, 114 )
  else if( amt > parseFloat( formatNumber( document.getElementById('soldiers').value) * .1 ) )
    total = upkeep( amt, 114 )
  else
    total = upkeep( amt, 38 )
  return total * ( 1 + tan_upkeep )
}

function find_resource( resource )
{
  cur = 0
  found = false
  while( !found && cur < 12 )
  {
    if( resources[cur] == resource )
	  return cur
	else
	  cur++
  }
  return 99
}

function find_bonus( resource )
{
  cur = 0
  found = false
  while( !found && cur < 12 )
  {
    if( res_bonuses[cur] == resource )
	  return cur
	else
	  cur++
  }
  return 99
}
  
function toggle_resource( resource )
{
  found = find_resource( resource )
  if(found != 99)
  {
    for(i = cur; i < 11; i++)
	{
	  document[res_img[i]].src = document[res_img[i+1]].src
	  resources[i] = resources[i+1]
	}
	document[res_img[11]].src = "blank.gif"
	document[res_img[11]].style.display = "none"
	resources[i] = resources[11] = ""
	current_resource--
  }
  else if( current_resource < 12 )
  {
    document[res_img[current_resource]].src = resource + ".gif"
    resources[current_resource] = resource
	document[res_img[current_resource]].style.display = "inline"
    current_resource += 1;
  }
  bonuses()
  update()
}

function add_bonus( bonus )
{
  if( bonus == "affluent" )
  {
    add_bonus( "jewelry" )
    total = get_resource( "fish" ) + get_resource( "furs" ) + get_resource( "wine" )
	if( total > 0 )
	{
      if( get_resource( "fish" ) == 0 )
	    toggle_resource( "fish" )
      if( get_resource( "furs" ) == 0 )
	    toggle_resource( "furs" )
      if( get_resource( "wine" ) == 0 )
	    toggle_resource( "wine" )
	}
	else
	{
	  toggle_resource( "fish" )
	  toggle_resource( "furs" )
	  toggle_resource( "wine" )
	}
  }
  else if( bonus == "asphalt" )
  {
    if( get_bonus
    add_bonus( "construction" )
    total = get_resource( "oil" ) + get_resource( "rubber" )
	if( total > 0 )
	{
      if( get_resource( "oil" ) == 0 )
	    toggle_resource( "oil" )
      if( get_resource( "rubber" ) == 0 )
	    toggle_resource( "rubber" )
	}
	else
	{
	  toggle_resource( oil )
	  toggle_resource( rubber )
	}
  }
  else if( bonus == "beer" )
  {
    total = get_resource( water ) + get_resource( wheat ) + get_resource( lumber ) + get_resource( aluminum )
	if( total > 0 )
	{
      if( get_resource( water ) == 0 )
	    toggle_resource( water )
      if( get_resource( wheat ) == 0 )
	    toggle_resource( wheat )
      if( get_resource( lumber ) == 0 )
	    toggle_resource( lumber )
      if( get_resource( aluminum ) == 0 )
	    toggle_resource( aluminum )
	}
	else
	{
	  toggle_resource( water )
	  toggle_resource( wheat )
	  toggle_resource( lumber )
	  toggle_resource( aluminum )
	}
  }
  else if( bonus == "cars" )
  {
    add_bonus( "asphalt" )
    total = get_resource( "steel" )
	if( total > 0 )
	{
      if( get_resource( "steel" ) == 0 )
	    toggle_resource( "steel" )
	}
	else
	{
	  toggle_resource( "steel" )
	}
  }
  else if( bonus == "construction" )
  {
    total = get_resource( water ) + get_resource( wheat ) + get_resource( lumber ) + get_resource( aluminum )
	if( total > 0 )
	{
      if( get_resource( water ) == 0 )
	    toggle_resource( water )
      if( get_resource( wheat ) == 0 )
	    toggle_resource( wheat )
      if( get_resource( lumber ) == 0 )
	    toggle_resource( lumber )
      if( get_resource( aluminum ) == 0 )
	    toggle_resource( aluminum )
	}
	else
	{
	  toggle_resource( water )
	  toggle_resource( wheat )
	  toggle_resource( lumber )
	  toggle_resource( aluminum )
	}
  }
  else if( bonus == "fastfood" )
  {
    total = get_resource( water ) + get_resource( wheat ) + get_resource( lumber ) + get_resource( aluminum )
	if( total > 0 )
	{
      if( get_resource( water ) == 0 )
	    toggle_resource( water )
      if( get_resource( wheat ) == 0 )
	    toggle_resource( wheat )
      if( get_resource( lumber ) == 0 )
	    toggle_resource( lumber )
      if( get_resource( aluminum ) == 0 )
	    toggle_resource( aluminum )
	}
	else
	{
	  toggle_resource( water )
	  toggle_resource( wheat )
	  toggle_resource( lumber )
	  toggle_resource( aluminum )
	}
  }
  else if( bonus == "jewelry" )
  {
    total = get_resource( gold ) + get_resource( silver ) + get_resource( gems )
	if( total > 0 )
	{
      if( get_resource( gold ) == 0 )
	    toggle_resource( gold )
      if( get_resource( silver ) == 0 )
	    toggle_resource( silver )
      if( get_resource( gems ) == 0 )
	    toggle_resource( gems )
	}
	else
	{
	  toggle_resource( gold )
	  toggle_resource( silver )
	  toggle_resource( gems )
	}
  }
  else if( bonus == "microchips" )
  {
    total = get_resource( water ) + get_resource( wheat ) + get_resource( lumber ) + get_resource( aluminum )
	if( total > 0 )
	{
      if( get_resource( water ) == 0 )
	    toggle_resource( water )
      if( get_resource( wheat ) == 0 )
	    toggle_resource( wheat )
      if( get_resource( lumber ) == 0 )
	    toggle_resource( lumber )
      if( get_resource( aluminum ) == 0 )
	    toggle_resource( aluminum )
	}
	else
	{
	  toggle_resource( water )
	  toggle_resource( wheat )
	  toggle_resource( lumber )
	  toggle_resource( aluminum )
	}
  }
  else if( bonus == "radiation" )
  {
    total = get_resource( water ) + get_resource( wheat ) + get_resource( lumber ) + get_resource( aluminum )
	if( total > 0 )
	{
      if( get_resource( water ) == 0 )
	    toggle_resource( water )
      if( get_resource( wheat ) == 0 )
	    toggle_resource( wheat )
      if( get_resource( lumber ) == 0 )
	    toggle_resource( lumber )
      if( get_resource( aluminum ) == 0 )
	    toggle_resource( aluminum )
	}
	else
	{
	  toggle_resource( water )
	  toggle_resource( wheat )
	  toggle_resource( lumber )
	  toggle_resource( aluminum )
	}
  }
  else if( bonus == "scholars" )
  {
    total = get_resource( water ) + get_resource( wheat ) + get_resource( lumber ) + get_resource( aluminum )
	if( total > 0 )
	{
      if( get_resource( water ) == 0 )
	    toggle_resource( water )
      if( get_resource( wheat ) == 0 )
	    toggle_resource( wheat )
      if( get_resource( lumber ) == 0 )
	    toggle_resource( lumber )
      if( get_resource( aluminum ) == 0 )
	    toggle_resource( aluminum )
	}
	else
	{
	  toggle_resource( water )
	  toggle_resource( wheat )
	  toggle_resource( lumber )
	  toggle_resource( aluminum )
	}
  }
  else if( bonus == "steel" )
  {
    total = get_resource( water ) + get_resource( wheat ) + get_resource( lumber ) + get_resource( aluminum )
	if( total > 0 )
	{
      if( get_resource( water ) == 0 )
	    toggle_resource( water )
      if( get_resource( wheat ) == 0 )
	    toggle_resource( wheat )
      if( get_resource( lumber ) == 0 )
	    toggle_resource( lumber )
      if( get_resource( aluminum ) == 0 )
	    toggle_resource( aluminum )
	}
	else
	{
	  toggle_resource( water )
	  toggle_resource( wheat )
	  toggle_resource( lumber )
	  toggle_resource( aluminum )
	}
  }
}

function toggle_bonus( resource )
{
  found = find_bonus( resource )
  if(found != 99)
  {
    for(i = cur; i < 7; i++)
	{
	  document[bon_img[i]].src = document[bon_img[i+1]].src
	  res_bonuses[i] = res_bonuses[i+1]
	}
	document[bon_img[7]].src = "blank.gif"
	document[bon_img[7]].style.display = "none"
	res_bonuses[i] = res_bonuses[7] = ""
	current_bonus--
  }
  else if( current_bonus < 8 )
  {
    document[bon_img[current_bonus]].src = resource + ".gif"
    res_bonuses[current_bonus] = resource
	document[bon_img[current_bonus]].style.display = "inline"
    current_bonus += 1;
  }
  update()
}

function resource_bonus( resource )
{
  
  if( resource == "aluminum" )
  {
    sol_count = sol_count  * 1.2
	inf_cost  = inf_cost   *  .93
	air_cost  = air_cost   *  .93
  }
  else if( resource == "cattle")
  {
    cit_count = cit_count * 1.05
	lan_cost  = lan_cost  *  .9
  }
  else if( resource == "coal")
  {
	pur_land  = pur_land   * 1.15
    sol_count = sol_count  * 1.08
	inf_cost  = inf_cost   *  .96
	enviro    = enviro     -  .5
  }
  else if( resource == "fish")
  {
    cit_count = cit_count * 1.08
	lan_cost  = lan_cost  *  .95
  }
  else if( resource == "furs")
  {
    cit_income = cit_income + 3.5
	nat_land   = nat_land   * 1.1
  }
  else if( resource == "gems")
  {
    cit_income = cit_income + 3.5
	pop_happin = pop_happin + 2.5
  }
  else if( resource == "gold")
  {
    cit_income = cit_income + 3.5
	tek_cost   = tek_cost   *  .95
  }
  else if( resource == "iron")
  {
    sol_cost   = sol_cost   - 3
    inf_upkeep = inf_upkeep *  .9
	inf_cost   = inf_cost   *  .95
  }
  else if( resource == "lead")
  {
    nuk_upkeep = nuk_upkeep * .8
    air_upkeep = air_upkeep * .8
	tan_cost   = tan_cost   * .92
	tan_upkeep = tan_upkeep * .92
	sol_upkeep = sol_upkeep - .5
  }
  else if( resource == "lumber")
  {
    inf_upkeep = inf_upkeep *  .92
    inf_cost = inf_cost *  .94
  }
  else if( resource == "marble")
  {
    inf_cost = inf_cost *  .9
  }
  else if( resource == "oil")
  {
    sol_cost   = sol_cost   - 3
	pop_happin = pop_happin + 1.5
    sol_count  = sol_count * 1.1
	air_cost   = air_cost   *  .96
	enviro    = enviro     -  .5
  }
  else if( resource == "pigs")
  {
	sol_upkeep = sol_upkeep -  .5
    sol_count  = sol_count * 1.15
	cit_count  = cit_count  * 1.035
  }
  else if( resource == "rubber")
  {
    pur_land = pur_land * 1.2
	lan_cost = lan_cost *  .9
	air_cost = air_cost *  .96
	inf_cost = inf_cost *  .97
  }
  else if( resource == "silver")
  {
    cit_income = cit_income + 2
	pop_happin = pop_happin + 2
  }
  else if( resource == "spices")
  {
    pur_land   = pur_land   * 1.08
	pop_happin = pop_happin + 2
  }
  else if( resource == "sugar")
  {
    pur_land   = pur_land   * 1.05
	cit_count  = cit_count  * 1.03
	pop_happin = pop_happin + 1
  }
  else if( resource == "uranium")
  {
	inf_upkeep = inf_upkeep *  .97
	pop_happin = pop_happin - 1
	enviro     = enviro     -  .5
  }
  else if( resource == "water")
  {
	pop_happin = pop_happin + 2.5
	enviro_per = enviro_per * 1.1
  }
  else if( resource == "wheat")
  {
    pur_land  = pur_land *  1.15
	cit_count = cit_count * 1.08
  }
  else if( resource == "wine")
  {
    pop_happin = pop_happin + 3
  }
}

function bonus_bonus( bonus, add )
{
  
  if( bonus == "affluent" )
  {
    pop_happin = pop_happin + 2
  }
  else if( bonus == "asphalt" )
  {
    inf_upkeep = inf_upkeep * .95
  }
  else if( bonus == "beer" )
  {
    pop_happin = pop_happin + 2
  }
  else if( bonus == "cars" )
  {
    pop_happin = pop_happin + 3
  }
  else if( bonus == "construction" )
  {
    inf_cost  = inf_cost  *   .95
	air_extra = air_extra + 10
  }
  else if( bonus == "fastfood" )
  {
    pop_happin = pop_happin + 2
  }
  else if( bonus == "jewelry" )
  {
    pop_happin = pop_happin + 1.5
  }
  else if( bonus == "microchips" )
  {
    pop_happin = pop_happin + 2
	tek_cost   = tek_cost   *  .92
  }
  else if( bonus == "radiation" )
  {
    enviro_per = enviro_per * 1.1
  }
  else if( bonus == "scholars" )
  {
    cit_income = cit_income + 3
  }
  else if( bonus == "steel" )
  {
    inf_cost = inf_cost * .98
  }

}

function bonuses()
{
  aluminum = find_resource( "aluminum" )
  cattle   = find_resource( "cattle" )
  coal     = find_resource( "coal" )
  fish     = find_resource( "fish" )
  furs     = find_resource( "furs" )
  gems     = find_resource( "gems" )
  gold     = find_resource( "gold" )
  iron     = find_resource( "iron" )
  lead     = find_resource( "lead" )
  lumber   = find_resource( "lumber" )
  marble   = find_resource( "marble" )
  oil      = find_resource( "oil" )
  pigs     = find_resource( "pigs" )
  rubber   = find_resource( "rubber" )
  silver   = find_resource( "silver" )
  spices   = find_resource( "spices" )
  sugar    = find_resource( "sugar" )
  uranium  = find_resource( "uranium" )
  water    = find_resource( "water" )
  wheat    = find_resource( "wheat" )
  wine     = find_resource( "wine" )
  
  if( coal + fish + furs + gems + gold + silver + wine < 99 )
  {
    if(find_bonus( "affluent" ) == 99)
	  toggle_bonus( "affluent" )
  }
  else
  {
    if(find_bonus( "affluent" ) < 99)
	  toggle_bonus( "affluent" )
  }
  
  
  if( aluminum + iron + lumber + marble + oil + rubber < 99 )
  {
    if(find_bonus( "asphalt" ) == 99)
	  toggle_bonus( "asphalt" )
  }
  else
  {
    if(find_bonus( "asphalt" ) < 99)
	  toggle_bonus( "asphalt" )
  }
  
  if( aluminum + iron + lumber + marble + oil + rubber + coal < 99 )
  {
    if(find_bonus( "cars" ) == 99)
	  toggle_bonus( "cars" )
  }
  else
  {
    if(find_bonus( "cars" ) < 99)
	  toggle_bonus( "cars" )
  }
  
  if( aluminum + lumber + water + wheat < 99 )
  {
    if(find_bonus( "beer" ) == 99)
	  toggle_bonus( "beer" )
  }
  else
  {
    if(find_bonus( "beer" ) < 99)
	  toggle_bonus( "beer" )
  }
  
  if( aluminum + iron + lumber + marble < 99 )
  {
    if(find_bonus( "construction" ) == 99)
	  toggle_bonus( "construction" )
  }
  else
  {
    if(find_bonus( "construction" ) < 99)
	  toggle_bonus( "construction" )
  }
  
  if( cattle + pigs + spices + sugar < 99 )
  {
    if(find_bonus( "fastfood" ) == 99)
	  toggle_bonus( "fastfood" )
  }
  else
  {
    if(find_bonus( "fastfood" ) < 99)
	  toggle_bonus( "fastfood" )
  }
  
  if( coal + gems + gold + silver < 99 )
  {
    if(find_bonus( "jewelry" ) == 99)
	  toggle_bonus( "jewelry" )
  }
  else
  {
    if(find_bonus( "jewelry" ) < 99)
	  toggle_bonus( "jewelry" )
  }
  
  if( gold + lead + oil < 99 )
  {
    if(find_bonus( "microchips" ) == 99)
	  toggle_bonus( "microchips" )
  }
  else
  {
    if(find_bonus( "microchips" ) < 99)
	  toggle_bonus( "microchips" )
  }
  
  if( marble + lumber + iron + gold + lead + oil + coal + aluminum < 99 )
  {
    if(find_bonus( "radiation" ) == 99)
	  toggle_bonus( "radiation" )
  }
  else
  {
    if(find_bonus( "radiation" ) < 99)
	  toggle_bonus( "radiation" )
  }
  
  if( lead + lumber < 99 )
  {
    if(find_bonus( "scholar" ) == 99)
	  toggle_bonus( "scholar" )
  }
  else
  {
    if(find_bonus( "scholar" ) < 99)
	  toggle_bonus( "scholar" )
  }
  
  if( coal + iron < 99 )
  {
    if(find_bonus( "steel" ) == 99)
	  toggle_bonus( "steel" )
  }
  else
  {
    if(find_bonus( "steel" ) < 99)
	  toggle_bonus( "steel" )
  }
}

//-->