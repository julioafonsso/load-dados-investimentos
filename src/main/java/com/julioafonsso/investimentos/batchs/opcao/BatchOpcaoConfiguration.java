package com.julioafonsso.investimentos.batchs.opcao;

import com.julioafonsso.investimentos.batchs.opcao.load.LoadOpcaoProcessor;
import com.julioafonsso.investimentos.batchs.opcao.load.LoadOpcaoReader;
import com.julioafonsso.investimentos.batchs.opcao.load.LoadOpcaoWriter;
import com.julioafonsso.investimentos.model.opcao.Opcao;
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

import java.util.List;


@Configuration
public class BatchOpcaoConfiguration {

        @Autowired
        public StepBuilderFactory stepBuilderFactory;

        @Bean
        public Flow flowOpcao(Step loadOpcao) {
        return new FlowBuilder<SimpleFlow>("flowOpcao")
                .start(loadOpcao)
                .build();
    }

        @Bean
        public Step loadOpcao(LoadOpcaoReader loadOpcaoReader,
                              LoadOpcaoProcessor loadOpcaoProcessor,
                              LoadOpcaoWriter loadOpcaoWriter,
                              TaskExecutor executorLoadOpcao) {

        return stepBuilderFactory.get("Load Opcao")
                .<String, List<Opcao>>chunk(5)
                .reader(loadOpcaoReader)
                .processor(loadOpcaoProcessor)
                .writer(loadOpcaoWriter)
                .taskExecutor(executorLoadOpcao)
                .build();
    }

        @Bean
        public TaskExecutor executorLoadOpcao() {
        return new SimpleAsyncTaskExecutor("LoadOpcao");
    }
}
