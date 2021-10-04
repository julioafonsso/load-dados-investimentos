package com.julioafonsso.investimentos.batchs.acao;

import com.julioafonsso.investimentos.batchs.acao.load.LoadAcaoProcessor;
import com.julioafonsso.investimentos.batchs.acao.load.LoadAcaoReader;
import com.julioafonsso.investimentos.batchs.acao.load.LoadAcaoWriter;
import com.julioafonsso.investimentos.batchs.acao.processamento.media.CalculoMediasAcaoPorSetorProcessor;
import com.julioafonsso.investimentos.batchs.acao.processamento.media.CalculoMediasAcaoPorSetorReader;
import com.julioafonsso.investimentos.batchs.acao.processamento.media.CalculoMediasAcaoPorSetorWriter;
import com.julioafonsso.investimentos.model.acao.Acao;
import com.julioafonsso.investimentos.model.acao.DadosMedioPorSetor;
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
public class BatchAcaoConfiguration {

    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    @Bean
    public Flow flowAcao(Step loadAcoes,
                         Step calculoMedioPorSetor){
        return new FlowBuilder<SimpleFlow>("flowAcao")
                .start(loadAcoes)
                .next(calculoMedioPorSetor)
                .build();
    }

    @Bean
    public Step loadAcoes(LoadAcaoWriter loadDadosWriterAcao,
                      LoadAcaoProcessor loadDadosProcessorAcao,
                      LoadAcaoReader loadDadosReader,
                      TaskExecutor executorLoadAcoes
    ) {
        return stepBuilderFactory.get("Load Acao")
                .<String, Acao>chunk(20)
                .reader(loadDadosReader)
                .processor(loadDadosProcessorAcao)
                .writer(loadDadosWriterAcao)
                .taskExecutor(executorLoadAcoes)
                .build();
    }

    @Bean
    public Step calculoMedioPorSetor(CalculoMediasAcaoPorSetorWriter calculoMediasAcaoPorSetorWriter,
                                     CalculoMediasAcaoPorSetorProcessor calculoMediasAcaoPorSetorProcessor,
                                     CalculoMediasAcaoPorSetorReader calculoMediasAcaoPorSetorReader,
                                     TaskExecutor executorLoadAcoes
    ) {
        return stepBuilderFactory.get("Load Acao")
                .<String, DadosMedioPorSetor>chunk(20)
                .reader(calculoMediasAcaoPorSetorReader)
                .processor(calculoMediasAcaoPorSetorProcessor)
                .writer(calculoMediasAcaoPorSetorWriter)
                .taskExecutor(executorLoadAcoes)
                .build();
    }

    @Bean
    public TaskExecutor executorLoadAcoes() {
        return new SimpleAsyncTaskExecutor("LoadAcoes");
    }

    @Bean
    public TaskExecutor executorCalculoMedioPorSetor() {
        return new SimpleAsyncTaskExecutor("CalculoMedioPorSetor");
    }

}
