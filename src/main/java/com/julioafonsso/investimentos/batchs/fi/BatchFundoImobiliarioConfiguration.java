package com.julioafonsso.investimentos.batchs.fi;

import com.julioafonsso.investimentos.batchs.fi.load.LoadFundoImobiliarioWriter;
import com.julioafonsso.investimentos.batchs.fi.load.LoadFundoImobiliaroProcessor;
import com.julioafonsso.investimentos.batchs.fi.load.LoadFundosImobiliariosReader;
import com.julioafonsso.investimentos.model.fi.FundoImobiliario;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.job.builder.FlowBuilder;
import org.springframework.batch.core.job.flow.Flow;
import org.springframework.batch.core.job.flow.support.SimpleFlow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.core.task.TaskExecutor;

@Configuration
public class BatchFundoImobiliarioConfiguration {

    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    @Bean
    public Flow flowFI(Step loadFundoImboliario) {
        return new FlowBuilder<SimpleFlow>("flowFI")
                .start(loadFundoImboliario)
                .build();
    }

    @Bean
    public Step loadFundoImboliario(LoadFundoImobiliarioWriter loadFundoImobiliarioWriter,
                      LoadFundoImobiliaroProcessor fundoImobiliaroProcessor,
                      LoadFundosImobiliariosReader loadFundosImobiliariosReader,
                      TaskExecutor executorLoadFundosImobiliarios) {
        return stepBuilderFactory.get("Load Fundo Imobiliario")
                .<String, FundoImobiliario>chunk(5)
                .reader(loadFundosImobiliariosReader)
                .processor(fundoImobiliaroProcessor)
                .writer(loadFundoImobiliarioWriter)
                .taskExecutor(executorLoadFundosImobiliarios)
                .build();
    }

    @Bean
    public TaskExecutor executorLoadFundosImobiliarios() {
        return new SimpleAsyncTaskExecutor("LoadFundosImobiliarios");
    }
}
