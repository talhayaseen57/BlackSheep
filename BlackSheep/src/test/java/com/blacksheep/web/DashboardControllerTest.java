package com.blacksheep.web;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(ContactFormController.class)
class DashboardControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Test
	void testGetMainPage() throws Exception {
		String url = "/";
		mockMvc.perform(get(url)).andExpect(status().isOk());
	}

}
