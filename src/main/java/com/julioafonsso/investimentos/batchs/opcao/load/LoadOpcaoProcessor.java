package com.julioafonsso.investimentos.batchs.opcao.load;

import com.julioafonsso.investimentos.model.opcao.Opcao;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LoadOpcaoProcessor implements ItemProcessor<String, List<Opcao>> {

    @Override
    public List<Opcao> process(String codigo) throws Exception {
        return null;
    }

    @Bean
    public RestTemplateBuilder restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }
}
