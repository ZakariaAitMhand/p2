package dev.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import dev.project2.entities.Property;
import dev.project2.entities.PropertyType;
import dev.project2.entities.Agent;
import dev.project2.services.PropertyService;
import dev.project2.services.PropertyTypeService;
import dev.project2.services.AgentService;

@Component
@RestController // @ RestController says that all methods in the controller return string
// ie they do not return views be default which is @controller default
@CrossOrigin("*") //enable cors anywhere
public class AgentController {
	
	
	@Autowired
	AgentService as;
	
	@RequestMapping(value = "/agents", method = RequestMethod.GET)
	public List<Agent> getAllAgents (){
		
		
		
		return this.as.getAllAgents();
	}
	
	@RequestMapping(value = "/agents/{id}", method = RequestMethod.GET)
	public Agent getAgentById(@PathVariable int id) {
		return this.as.getAgentById(id);
	}
	
	
	@RequestMapping(value = "/agents", method = RequestMethod.POST)
	public Agent createAgent(@RequestBody Agent agent) {
		System.out.println(agent.toString());
		return this.as.createNewAgent(agent);
		
	}
	
	@RequestMapping(value = "/agents", method = RequestMethod.PUT)
	public Agent updateAssociate(@RequestBody Agent agent) {
		return this.as.updateAgent(agent);
	}
	
	
	@RequestMapping(value = "/agents/{id}", method = RequestMethod.PUT)
	public Agent updateAgentId(@RequestBody Agent associate, @PathVariable int id) {
		associate.setAid(id);
		return this.as.updateAgent(associate);
	}
	
	

	@RequestMapping(value = "/agents/{id}", method = RequestMethod.DELETE)
	public Boolean deleteAgent(@PathVariable int id) { // Spring does not like returning primitives. Use wrapper classes
		Agent a = this.as.getAgentById(id);
		return this.as.deleteAgent(a);
	}
	
	
	
	
	
	
	

}// end class