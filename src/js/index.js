(function(){
	loadPokemon('pkmn_slot_01');
})(); //end 

function loadPokemon(nametag) {
		var el = document.getElementById(nametag);
		var pkmn = JSON.parse(el.dataset.pkmn);
		
		// return

		el.querySelectorAll('.pkmn_name')[0].textContent = pkmn.name;
		el.querySelectorAll('.pkmn_lv')[0].textContent = pkmn.level;
		el.querySelectorAll('.pkmn_img_icon')[0].src= '/build/img/gender'+pkmn.gender+'.svg';
		el.querySelectorAll('.pkmn_item')[0].textContent = pkmn.item;
		el.querySelectorAll('.pkmn-item-img')[0].src = 'https://nouthuca.com/img/item/'+pkmn.item_img+'.png?resize=82%2C74';
		el.querySelectorAll('.pkmn_ability')[0].textContent = pkmn.ability;
		var type1 = validateType(pkmn.type1)
		el.querySelectorAll('.ty_1')[0].textContent = type1[0];
		el.querySelectorAll('.ty_1')[0].className += ' ' + type1[1];

		// Cuando no tiene segundo tipo se agrega none
		if(pkmn.type2 !== 'none'){
			var type2 = validateType(pkmn.type2)
			el.querySelectorAll('.ty_2')[0].textContent = type2[0];
			el.querySelectorAll('.ty_2')[0].className += ' ' + type2[1];
		} else {
			var delType = document.getElementById('ty_2')
			delType.parentNode.removeChild(delType);
		}

		el.querySelectorAll('.pkm-img')[0].src = 'https://nouthuca.com/img/pgl/'+pkmn.poke_img+'.png';

		// var move1 = validateMove()
		el.querySelectorAll('.move_one')[0].textContent = pkmn.skill1;
		el.querySelectorAll('.move_one')[0].className += ' bt_'+pkmn.skill1_c;

		el.querySelectorAll('.move_two')[0].textContent = pkmn.skill2;
		el.querySelectorAll('.move_two')[0].className += ' bt_'+pkmn.skill2_c;

		el.querySelectorAll('.move_three')[0].textContent = pkmn.skill3;
		el.querySelectorAll('.move_three')[0].className += ' bt_'+pkmn.skill3_c;

		el.querySelectorAll('.move_four')[0].textContent = pkmn.skill4;
		el.querySelectorAll('.move_four')[0].className += ' bt_'+pkmn.skill4_c;

		el.querySelectorAll('.base_ps')[0].textContent = pkmn.hp;
		el.querySelectorAll('.base_att')[0].textContent = pkmn.att;
		el.querySelectorAll('.base_def')[0].textContent = pkmn.def;
		el.querySelectorAll('.base_spa')[0].textContent = pkmn.spa;
		el.querySelectorAll('.base_spd')[0].textContent = pkmn.spd;
		el.querySelectorAll('.base_vel')[0].textContent = pkmn.vel;

		el.querySelectorAll('.ev_hp')[0].textContent = pkmn.ev_hp;
		el.querySelectorAll('.ev_att')[0].textContent = pkmn.ev_att;
		el.querySelectorAll('.ev_def')[0].textContent = pkmn.ev_def;
		el.querySelectorAll('.ev_spa')[0].textContent = pkmn.ev_spa;
		el.querySelectorAll('.ev_spd')[0].textContent = pkmn.ev_spd;
		el.querySelectorAll('.ev_vel')[0].textContent = pkmn.ev_vel;

		el.querySelectorAll('.'+pkmn.stat_buff)[0].className += ' buff-color';
		el.querySelectorAll('.'+pkmn.stat_debuff)[0].className += ' debuff-color';
	}

function validateType(pkmn_type){
		switch(pkmn_type){
			case 'normal':
				return ['Normal','c_type_normal']
				break
			case 'fire':
				return ['Fuego','c_type_fire']
				break
			case 'water':
				return ['Agua','c_type_water']
				break
			case 'electric':
				return ['Elect.','c_type_electric']
				break
			case 'grass':
				return ['Planta','c_type_grass']
				break
			case 'ice':
				return ['Hielo','c_type_ice']
				break
			case 'fighting':
				return ['Lucha','c_type_fighting']
				break
			case 'poison':
				return ['Veneno','c_type_poison']
				break
			case 'ground':
				return ['Tierra','c_type_ground']
				break
			case 'flying':
				return ['Volad.','c_type_flying']
				break
			case 'psychic':
				return ['Psiqu.','c_type_psychic']
				break
			case 'bug':
				return ['Bicho','c_type_bug']
				break
			case 'rock':
				return ['Roca','c_type_rock']
				break
			case 'gost':
				return ['Fant.','c_type_gost']
				break
			case 'dragon':
				return ['Dragon','c_type_dragon']
				break
			case 'dark':
				return ['Sinies.','c_type_dark']
				break
			case 'steel':
				return ['Acero','c_type_steel']
				break
			case 'fairy':
				return ['Hada','c_type_fairy']
				break
			default:
				return ['Error', 'c_type_bug']
		}
	}